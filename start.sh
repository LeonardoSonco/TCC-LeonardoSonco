#!/bin/bash

# Script do backend (autodroid)
echo "Executando o Backend (autodroid/droidaugmentor)..."
cd autodroid 
./start.sh &
autodroid_pid=$!
cd ..

sleep 40
# Script do frontend
echo "Executando o FrontEnd."
echo "Acesse http://localhost:80 para visualizar o FrontEnd."
cd frontend 
./start.sh  

kill $autodroid_pid
echo "Processo Finalizados com Sucesso!"
