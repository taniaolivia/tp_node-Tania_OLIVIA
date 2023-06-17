# Côté "Back" - API

### Configuration du fichier .env
- Copiez le fichier .env.example et le renommez en .env
- Mettez cette configuration dans le fichier .env :
```
MONGODB_SERVER=mongo
MONGODB_AUTH_DATABASE=mongodb
MONGODB_AUTH_USERNAME=mongo
MONGODB_AUTH_PASSWORD=mongopass
BASICAUTH_USERNAME=mongo
BASICAUTH_PASSWORD=mongopass
JWT_KEY=-M8PweEfvTMiD_OQ1aVWyxxfQggo9DXKiNAADvjGR8c
```

### Lancement de l'API

- D'abord, il faut lancer le docker : ``` docker-compose up ```

### Connexion à la base de données
- Username : mongo
- Password : mongopass
- Lien : <http://localhost:8081/>

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
- Exemple de rêquete :
```
localhost:3000/user/logout/648ad622e9a6666d0afac3f2
```

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

### Récupération d'un post par id : POSTMAN
- Lien : ```localhost:3000/posts/:post_id```
- Méthode : GET
- Ajoutez un header "Authorization" avec le token de login
- Exemple de rêquete :
```
localhost:3000/posts//648ad622e9a6666d0afac3f2
```