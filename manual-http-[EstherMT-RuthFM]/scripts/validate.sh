#!/bin/bash

echo "🔍 Iniciando validación del proyecto..."
echo "--------------------------------------"

# Función auxiliar
check_file() {
  if [ -f "$1" ]; then
    echo "✅ Archivo encontrado: $1"
  else
    echo "❌ Falta el archivo: $1"
    errors=true
  fi
}

check_dir() {
  if [ -d "$1" ]; then
    echo "✅ Carpeta encontrada: $1"
  else
    echo "❌ Falta la carpeta: $1"
    errors=true
  fi
}

# Archivos obligatorios
check_file "package.json"
check_file "src/db/db.json"
check_file ".gitignore"
check_file ".env.example"
check_file "README.md"
check_file "checklist.md"
check_file "peticiones-crud.http"

# Carpetas obligatorias
check_dir "src"
check_file "src/crud-curl.js"
check_dir "imagenes"
check_dir "scripts"

echo "--------------------------------------"
echo "🔍 Verificando dependencias y scripts en package.json..."

# Validar contenido del package.json
if grep -q '"type": *"module"' package.json; then
  echo "✅ package.json usa ES Modules"
else
  echo "❌ Falta \"type\": \"module\" en package.json"
  errors=true
fi

if grep -q "dotenv" package.json; then
  echo "✅ Dependencia dotenv encontrada"
else
  echo "❌ Dependencia dotenv no encontrada"
  errors=true
fi

if grep -q "json-server" package.json; then
  echo "✅ Dependencia json-server encontrada"
else
  echo "❌ Dependencia json-server no encontrada"
  errors=true
fi

if grep -q "server:up" package.json; then
  echo "✅ Script server:up encontrado"
else
  echo "❌ Script server:up no encontrado"
  errors=true
fi

if grep -q "crud:curl" package.json; then
  echo "✅ Script crud:curl encontrado"
else
  echo "❌ Script crud:curl no encontrado"
  errors=true
fi

echo "--------------------------------------"
echo "🖼 Verificando capturas de Thunder Client..."

count=$(ls imagenes/thunder_client/*.png 2>/dev/null | wc -l)
if [ "$count" -ge 6 ]; then
  echo "✅ Se encontraron $count capturas en /images"
else
  echo "❌ Se encontraron solo $count capturas (mínimo 6 requeridas)"
  errors=true
fi

echo "--------------------------------------"

if [ "$errors" = true ]; then
  echo "❌ Validación fallida. Revisa los errores anteriores."
  exit 1
else
  echo "🎉 Validación completada exitosamente. ¡Todo correcto!"
  exit 0
fi