


# Socket-Server

Reconstruir módulos de node
```
npm install 
```
Generar el DIST
```
tsc -w
```
Levantar servisor, cualquiera de estos dos comandos
```

nodemon dist/
node dist/
```
# Hacer commit
git status
git add .
git commit -m "Segundo commit - update README.md"
git push -u origin master
# Crear un Tag
git tag
git tag -a v1.0.0 -m "Rest Server listo"
git push --tags
