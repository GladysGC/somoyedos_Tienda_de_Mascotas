Lineas generales del trabajo en ramas:
- Tips rápido para inicar un proyecto:
1. Una vez inciado el repositorío en Github, copiamos el link del repo en HTTP, y dirigiendonos desde la consola a la carpeta en local, escribiremos: $ git clone <link del repositorio>.
2. Recordar que una vez clonado, tendremos que bajar un nivel más de subcartera

- Cómo crear ramas - (solo necesario una vez por dev!)
1. Creamos la rama: <b>rama main</b> ---> git branch <nombre-de-la-rama>
2. Cambiar a nuestra propia rama para trabajar: <b>rama main</b> ---> git checkout <nombre-de-la-rama>

- Cómo comitear trabajando en ramas:
1. Dev1 guarda cambios: <b>rama dev1</b> ---> git add . ; git commit -m "commit message".
2. Dev1 cambia de rama: <b>rama dev1</b> ---> git checkout develop.
3. Dev1 mergea el código de su rama a la rama principal: <b>rama develop</b> ---> git merge --no-ff dev1.
4. Dev1 sube los cambios de su rama principal a repo remoto: <b>rama develop</b> ---> git push origin develop.
5. Dev2 guarda cambios: <b>rama dev2</b> ---> git add . ; git commit -m "commit message".
6. Dev2 cambia de rama: <b>rama dev2</b> ---> git checkout develop.
7. Dev2 mergea el código de su rama a la rama principal: <b>rama develop</b> ---> git merge --no-ff dev2.
8. Dev2 se baja los cambios del repo remoto a su rama principal: <b>rama develop</b> ---> git pull origin develop.
9. (Si hay conflictos, dev2 deberá solucionarlos y guardarlos: git add . ; git commit -m "commit message").
10. Dev2 sube su rama principal ya fusionada a remoto: <b>rama develop</b> ---> git push origin develop.
11. Dev1 se baja el código de remoto ya fusionado y sin conflicto: <b>rama develop</b> ---> git pull origin develop.
12. Ambos dev van a sus ramas: <b>rama develop</b> ---> git checkout dev1/dev2/dev3/...
13. Ambos dev fusionan el código de la rama principal a la suya: <b>rama dev1/dev2</b> ---> git merge develop.

Name rama de trabajo: develop

En caso de ser más desarrolladores trabajando sobre el mismo proyecto, repetiríamos los pasos sustituyendo el dev2, por un nuevo dev3, etc. empezaría en el punto 5 hasta el 9, al fusionar todos los códigos con el develop, seguiríamos todos con el punto 11 en adelante.


