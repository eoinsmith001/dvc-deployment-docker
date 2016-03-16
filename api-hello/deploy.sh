#!/bin/bash

docker run \
  -p 3000:3000 \
  --name api \
  -d \
  eoinsmith001/api-hello
