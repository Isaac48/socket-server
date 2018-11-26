

# Socket-Server


Reconstruir módulos de Node
```
npm install
```

Generar el DIST
```
tsc -w
```

Levantar servidor, cualquiera de estos dos comandos
```
nodemon dist/
node dist/
```

#Git

Inicializar repositorio Git
```
git init
```

Seguimiento de archivos
```
git status
```

Agregar archivos
``` 
git add .
```

Hacer comit
```
git config --global user.email "you@example.com"
git config --global user.name "Tu Nombre"
git commit -m " MENSAJE"
git remote add origin https://github.com/usuario/nombre del proyecto
git push -u origin master
```

Hacer un rollback de la aplicación
```
git checkout -- .
```


Crear un Tag
```
git tag
git tag -a v1.0.0 -m "Rest Server listo"
git push --tags
```

Ver los conflictos
```
git merge origin/master --allow-unrelated-histories

git push --set-upstream origin master    => ayuda con el error La rama actual master no tiene una rama upstream. al hacer un git push
```




