const express = require('express');
const app = express();

require ('./src/service/databases');

app.use(express.json());


app.use('/cep', require('./src/routes/cep-routes'));


app.listen(3000, () => {
    console.log('Meu servidor está funcionando');
});