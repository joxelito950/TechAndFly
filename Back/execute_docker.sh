#!/bin/bash

docker stop microservicio && docker rm -f microservicio

docker rmi  microservicio/java:8

docker build -t microservicio/java:8 .

docker run -itd -p 8443:8443 --restart=always --privileged --name microservicio microservicio/java:8