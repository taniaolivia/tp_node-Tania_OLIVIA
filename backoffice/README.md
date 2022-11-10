# tp_node-Tania_OLIVIA

## Lancement de l'API

- D'abord, il faut lancer le docker : docker-compose up

## Connexion à la base de données
```
http://localhost:8081/db/mongodb/
```

## Exemple de la création d'un compte admin
```
{
    "email": "admin@gmail.com",
    "password": "admin",
    "admin": 1
}
```

## Exemple de la création d'un compte user
```
{
    "email": "user@gmail.com",
    "password": "user"
}
```