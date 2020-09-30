
плагины для фул стак

back-end:
1) пакеты: express mongoose 
2) пакет запуска: nodemon
3) пакет зля запуска и back-end и front-end: concurrently
4) пакет констант (не обязателен) https://www.npmjs.com/package/config : config 
5) пакет шифра пароля: bcryptjs
6) пакет валидации данных: express-validator
7) пакет jwt token: jsonwebtoken

scripts back-end:
1)"start": "node index.js",
2)"server": "nodemon index.js"

front-end:
1) создение в back-end: npx create-react-app client (client  - папка)

scripts front-end:
1)запуск не из ковневого package.json: "client": "npm run start --prefix client"
2)запуск client и server:"dev": "concurrently \"npm run client\" \"npm run server\""
