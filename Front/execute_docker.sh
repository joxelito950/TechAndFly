#!/bin/bash

docker stop presentation && docker rm -f presentation

docker rmi  presentation/react:15

docker build -t presentation/react:15 .

docker run -itd -p 80:80 --restart=always --privileged --name presentation presentation/react:15