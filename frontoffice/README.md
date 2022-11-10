# frontoffice

### Lancement de projet partie "front"
```
npm i
npm run serve
```
### Lien de projet

<http://localhost:8080/>

### IMPORTANT
- L'utilisateur non connecté et l'admin non connecté n'ont pas l'accès à l'affichage de liste des postes
- L'admin non connecté et l'utilisateur (connecté ou non connecté) ne peuvent pas créer un post
- L'affichage de liste des postes est désactivé -> Il faut se connecter en tant qu'admin ou utilisateur pour pouvoir l'activer 
- La création d'un post est désactivée -> Il faut se connecter en tant qu'admin pour pouvoir activer l'activer

### Création du compte : USER
- Cliquez le bouton "Login" sur <http://localhost:8080/>
- Cliquez le lien "Don't have any account ?"
- Remplissez tous les champs (email, password, admin) -> Le champ "admin", il faut choisir ```"No"```

### Création du compte : ADMIN
- Cliquez le bouton "Login" sur <http://localhost:8080/>
- Cliquez le lien "Don't have any account ?"
- Remplissez tous les champs (email, password, admin) -> Le champ "admin", il faut choisir ```"Yes"```

### Connexion du compte : ADMIN et USER
- Cliquez le bouton "Login" sur <http://localhost:8080/> ou le lien "Already have an accounte ?" sur le formulaire inscription
- Remplissez tous les champs (email, password)
