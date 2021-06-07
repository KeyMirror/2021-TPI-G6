# 2021-TPI-G6

## Version 'Live': 

*  [https://api-secretaria-g6.herokuapp.com](https://api-secretaria-g6.herokuapp.com)

## Instalacion local:

1) Clonar el repositorio: 
```bash
    git clone https://github.com/rln-tomas/2021-TPI-G6/
```


2) Dirigirse al root del proyecto e Instalar las dependencias: 
```bash
    cd 2021-TPI-G6 && npm install && npm i -g sequelize sequelize-cli
```

3) Copiar el archivo '.env.example' en el mismo lugar renombrado como: '.env'

4) Definir las constantes en: .env (reemplar los campos con los datos de su BD local)
```javascript
    DB_USER=nombre_de_usuario
    DB_PASSWORD=contrasenia
    DB_NAME=nombre_base_datos
    DB_HOST=nombre_host_bd
    DB_PORT=puerto
    DB_DIALECT=dialecto
```

### Migrar los modelos
5) correr el siguiente comando en la terminal para migrar los modelos: 
```bash
    npx sequelize db:migrate
```

## Ejecucion: 
6) correr el siguiente comando en terminal: 
```bash
    npm run start
```

## API:

### Nuestro grupo hace uso de REST Client, así como de Postman para las consultas. 
En caso de utilizar REST Client basta con copiar el siguiente texto en "request.rest": 

```http
    GET http://localhost:4000/notifications/{cuit}
```
La response esperada para ese endpoint es del siguiente tipo: (Ejemplo) 
```json 
    {
        "ok": true,
        "status": 200,
        "data": {
            "notification": {
            "status": false,
            "cuit": "1234",
            "message": "Su situacion es de incumplimiento, revise las alertas y regularice su situacion con el ministerio."
            },
            "alerts": [
            {
                "title": "Incumplimiento mes: Enero",
                "description": "Al dia de hoy se encuentra excedido 17 dias.",
                "date": "2021-01-27"
            }
            ]
        }
    }
```