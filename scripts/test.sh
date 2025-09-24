#!/bin/bash
# /scripts/test.sh
# Script de prueba para todas las operaciones básicas de CURL
# Requiere permisos de ejecución: chmod +x /scripts/test.sh

API_BASE="https://jsonplaceholder.typicode.com"
RESOURCE="posts"

echo "=== CURL TEST SCRIPT ==="
echo ""

# 1️⃣ GET todos los posts
echo "GET todos los posts:"
curl -s -X GET "$API_BASE/$RESOURCE" | jq .
echo -e "\n---------------------\n"

# 2️⃣ GET un post específico
echo "GET post con id=1:"
curl -s -X GET "$API_BASE/$RESOURCE/1" | jq .
echo -e "\n---------------------\n"

# 3️⃣ POST un nuevo post
echo "POST un nuevo post:"
curl -s -X POST "$API_BASE/$RESOURCE" \
     -H "Content-Type: application/json" \
     -d '{"title": "foo", "body": "bar", "userId": 1}' | jq .
echo -e "\n---------------------\n"

# 4️⃣ PUT (actualizar un post existente)
echo "PUT actualizar post id=1:"
curl -s -X PUT "$API_BASE/$RESOURCE/1" \
     -H "Content-Type: application/json" \
     -d '{"id":1, "title": "nuevo titulo", "body": "contenido actualizado", "userId": 1}' | jq .
echo -e "\n---------------------\n"

# 5️⃣ PATCH (modificar parcialmente un post)
echo "PATCH post id=1:"
curl -s -X PATCH "$API_BASE/$RESOURCE/1" \
     -H "Content-Type: application/json" \
     -d '{"title": "titulo modificado"}' | jq .
echo -e "\n---------------------\n"

# 6️⃣ DELETE un post
echo "DELETE post id=1:"
curl -s -X DELETE "$API_BASE/$RESOURCE/1"
echo -e "\n---------------------\n"

echo "=== FIN DE PRUEBAS CURL ==="
