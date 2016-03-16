# Docker API arch

Simple deployment of two api containers for a load-balanced svc

- express
- nginx
- docker and docker-compose

## Usage

Haven't docker-compose-ified the reverse proxy bit, but the pattern is clear from svc-hello.

svc-hello uses an image commited to my private dockerhub, same image could be rebuilt locally using Dockerfile of api-hello

```
cd svc-hello
docker-compose up -d
cd ../rp-hello
docker build -t rp-hello .
./deploy.sh
```
