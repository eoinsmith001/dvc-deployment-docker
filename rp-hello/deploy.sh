#!/bin/bash

docker run \
  -p 8080:80 \
  -d \
  -v ${PWD}/conf.d:/etc/nginx/conf.d \
  --name rp-hello \
  rp-hello
