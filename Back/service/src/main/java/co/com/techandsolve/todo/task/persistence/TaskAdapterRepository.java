package co.com.techandsolve.todo.task.persistence;

import co.com.techandsolve.base.common.ReactiveAdapter;
import co.com.techandsolve.todo.task.domain.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;

/**
 * Esta clase extiende de la clase ReactiveAdapter que pertenece al paquete common, en generar extiende
 * de un template que permite adaptar los los objectos no reactivos a objectos reactivos.
 * <p>
 * Depende de TaskRepository que es el Repo con los objectos No-Reactive, el adaptador padre se encarga de
 * convertirlos.
 * <p>
 * Igualmente esta case es un adaptador y los metodos que no son proporcionados por la clase ReactiveAdapter
 * se deben transformar a objectos Reactivos.
 * <p>
 * Nota: Se debe usar el estereotipo @Repository para indentificar la capa de persistencia
 * <p>
 * Created by Raul A. Alzate <raul.alzate@techandsolve.com>  on 22/08/2017.
 */
@Repository
@Transactional
public class TaskAdapterRepository extends ReactiveAdapter<Task> {
    private TaskRepository repository;

    @Autowired
    public TaskAdapterRepository(TaskRepository repository) {
        super(repository);
        this.repository = repository;
    }

    /**
     * transformacion de objecto reactivo que obtiene las tareas por tag
     *
     * @param tag
     * @return tasks
     */
    public Flux<Task> listByTag(String tag) {
        return Flux.fromStream(repository.listByTag(tag).stream());
    }

    /**
     * transformacion de objecto reactivo que obtiene las tareas realizadas
     *
     * @return tasks
     */
    public Flux<Task> listByStatusDone() {
        return Flux.fromStream(repository.listByDone().stream());
    }
}
