#!/usr/bin/env bash

echo -e "\nCriando a imagem"
docker build --no-cache -t node-jquery-local .

echo -e "\nRecriando a stack"
docker-compose up -d

echo -e "\nExibindo logs, CTRL+C para sair"
docker-compose logs -f
