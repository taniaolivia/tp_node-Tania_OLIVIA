# Côté "Back" - API

### Lancement de l'API

- D'abord, il faut lancer le docker : ``` docker-compose up ```

### Connexion à la base de données
- Username : mongo
- Password : mongopass
- Lien : <http://localhost:8081/db/mongodb/>

### Création d'un compte admin : POSTMAN
- Lien : ```localhost:3000/user/register```
- Méthode : POST
- Exemple de rêquete :
```
{
    "email": "admin@gmail.com",
    "password": "admin",
    "admin": 1
}
```

### Création d'un compte user : POSTMAN
- Lien : ```localhost:3000/user/register```
- Méthode : POST
- Exemple de rêquete :
```
{
    "email": "user@gmail.com",
    "password": "user"
}
```

### Connexion d'un compte : POSTMAN
- Lien : ```localhost:3000/user/login```
- Méthode : POST
- Exemple de rêquete :
```
{
    "email": "user@gmail.com",
    "password": "user"
}
```

### Déconnexion d'un compte : POSTMAN
- Lien : ```localhost:3000/user/logout/:userId```
- Méthode : POST

### Création du post : POSTMAN
- Lien : ```localhost:3000/posts```
- Méthode : POST
- Ajoutez un header "Authorization" avec le token de login
- Exemple de rêquete :
```
{
    "title": "post 1",
    "content": "content"
}
```

### Récupération de tous les posts : POSTMAN
- Lien : ```localhost:3000/posts```
- Méthode : GET
- Ajoutez un header "Authorization" avec le token de login
