#!/bin/bash

# Função para exibir uma mensagem de erro e sair do script
function error_exit {
  echo "$1" 1>&2
  exit 1
}

# Caminho do diretório da TCC
DIRECTORY="./TCC"

# Verifica se o diretório existe
if [ ! -d "$DIRECTORY" ]; then
  error_exit "Erro: Diretório $DIRECTORY não encontrado."
fi

# Entra no diretório da TCC
cd "$DIRECTORY" || error_exit "Erro: Não foi possível entrar no diretório $DIRECTORY."

# Executa npm install
npm install || error_exit "Erro: Falha ao executar npm install."

# Executa npm run dev
npm run dev || error_exit "Erro: Falha ao executar npm run dev."

echo "Script executado com sucesso!"
