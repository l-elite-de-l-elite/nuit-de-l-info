/login:
    body : {
        "email": "",
        "password: ""
    }

    response: le token

/register:
    body: {
        "username": "",
        "email": "",
        "password": "",
    }

Pour toutes les routes ajouter le header: Authorization = Bearer TOKEN_VALUE

/unit/create:
    body : {
    "nom": "michel",
    "prenom": "roblochon",
    "dateNaissance":"31-10-2001",
    "poste": "chef"
    }


