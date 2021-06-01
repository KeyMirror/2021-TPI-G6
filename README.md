# 2021-TPI-G6
## Instalación:

### Primero clonamos el repositorio: 
```bash
    git clone https://github.com/rln-tomas/2021-TPI-G6/
```

### Luego instalamos las dependencias: 
```bash
    cd 2021-TPI-G6 && npm install
```
### Una vez instaladas las dependencias verificamos nuestras variables de entorno en el archivo .env:

```javascript
    PORT=4000
    DB_PASSWORD="nuestra contraseña"
    DB_USERNAME="nuestro nombre de usuario"
    DB_DATABASE="nuestra base de datos"
    DB_HOST="El host donde se aloja la base de datos"
    DB_DIALECT="El dialecto: mysql, sqlserver, etc."
```

## Ejecucion: 
### Corremos el siguiente comando en terminal: 
```bash
    npm run dev
```

## API: 

### Puede verificar el estado de su compañia realizando la siguiente request:

### Nuestro grupo hace uso de REST Client, así como de Postman para las consultas. 
### En caso de utilizar REST Client basta con copiar el siguiente texto en "request.rest": 

```http
    GET http://localhost:4000/notifications/{cuit}
```
### La response esperada para ese endpoint es del siguiente tipo: (Ejemplo) 
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
                "date": "2021-01-27T00:00:00.000Z"
            }
            ]
        }
    }
```