package co.com.techandsolve.todo.task.web;

import co.com.techandsolve.base.utils.WebClientUtils;
import co.com.techandsolve.todo.task.domain.Tag;
import co.com.techandsolve.todo.task.domain.Task;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Arrays;

/**
 * Created by Raul A. Alzate <raul.alzate@techandsolve.com>  on 14/08/2017.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "classpath:truncate.sql")
@TestPropertySource("classpath:config.properties")
public class TaskManagerControllerTest {

    @Value("${tokenJWT}")
    private String tokenJWT;


    private WebClient webClient;
    @LocalServerPort
    private int port;

    @Before
    public void setup() {

        this.webClient = WebClientUtils.webClient("localhost", port)
                .defaultHeader("Authorization", tokenJWT)
                .build();

        Task task1 = new Task(1L, "IT 1");
        Task task2 = new Task(2L, "IT 2");

        task1.setTags(Arrays.asList(new Tag("tag1"), new Tag("tag2")));
        task1.setDone(true);

        webClient.post().uri("/task").accept(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromObject(task1))
                .exchange()
                .flatMap(response ->
                        response.statusCode().value() == 200 ?
                                response.bodyToMono(Task.class) :
                                Mono.error(new IllegalStateException())
                ).doOnError(throwable -> Assert.fail()).block();


        webClient.post().uri("/task").accept(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromObject(task2))
                .exchange()
                .flatMap(response ->
                        response.statusCode().value() == 200 ?
                                response.bodyToMono(Task.class) :
                                Mono.error(new IllegalStateException())
                ).doOnError(throwable -> Assert.fail()).block();

    }


    @Test
    public void listByTag() {

        webClient.get().uri("/tasks/tag/tag1")
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .flatMapMany(response ->
                        response.statusCode().value() == 200 ?
                                response.bodyToFlux(Task.class) :
                                Flux.error(new IllegalStateException())
                ).doOnError(throwable -> Assert.fail())
                .toStream().forEach(task -> Assert.assertEquals("IT 1", task.getName()));

    }


    @Test
    public void listByStatusDone() {

        webClient.get().uri("/tasks/done")
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .flatMapMany(response ->
                        response.statusCode().value() == 200 ?
                                response.bodyToFlux(Task.class) :
                                Flux.error(new IllegalStateException())
                ).doOnError(throwable -> Assert.fail())
                .toStream().forEach(task -> Assert.assertEquals(task.getName(), "IT 1"));

    }


}
