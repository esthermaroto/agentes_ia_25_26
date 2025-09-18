#!/bin/bash
# @author: Esther MT
# @comment:-
# @description: Script que valida si tenemos instalados:git, node, npm, curl
# crear un script que utilizando el comando command -v verifique si tengo instalados los paquetes git, node, npm, curl.
#Si alguno de dichos paquetes no está en el sistema mostraremos mensaje de error.

clear
echo "Verificando los requisitos previos"

if command -v node > /dev/null 2>&1; then
	NODE_VERSION=$(node --version)
	echo ":) Node instalado correctamente: versión $NODE_VERSION"
else

	echo ":( No tienes instalado NodeJS"
	exit 1
fi


if command -v git > /dev/null 2>&1; then
        GIT_VERSION=$(git --version)
        echo ":) Git instalado correctamente: versión $GIT_VERSION"
else

        echo ":( No tienes instalado Git"
        exit 1
fi


if command -v npm > /dev/null 2>&1; then
        NPM_VERSION=$(npm --version)
        echo ":) Npm instalado correctamente: versión $NPM_VERSION"
else

        echo ":( No tienes instalado Nmp"
        exit 1
fi


if command -v curl > /dev/null 2>&1; then
        echo ":) Curl instalado correctamente"
else

        echo ":( No tienes instalado Curl"
        exit 1
fi


echo -e "\n Todos los paquetes instalados correctamente ;)"
