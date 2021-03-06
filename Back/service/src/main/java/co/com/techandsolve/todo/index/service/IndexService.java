package co.com.techandsolve.todo.index.service;

import reactor.core.publisher.Mono;


/**
 * Interfaz que garantiza los comportamientos del servicio.
 * <p>
 * Este contrato se encarga de garantizar basicamente un pequeño mensaje en la pantalla.
 * <p>
 * Created by Raul A. Alzate <raul.alzate@techandsolve.com>  on 24/08/2017.
 */
public interface IndexService {

    /*obtener resumen de los listandos*/
    Mono<String> summary();
}
