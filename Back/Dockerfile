FROM gradle:jdk8 AS BUILD_IMAGE

COPY --chown=gradle:gradle . /home/app
WORKDIR /home/app
RUN gradle build

FROM openjdk:8-jre
WORKDIR /opt/microservicio
COPY --from=BUILD_IMAGE /home/app/service/build/libs/service*.jar app.jar
EXPOSE 8443

RUN mkdir -p /opt/microservicio/external
VOLUME /opt/microservicio/external

CMD ["java","-jar","app.jar"]