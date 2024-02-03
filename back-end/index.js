const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

const userRoutes = require('./routes/userRoutes.js')


app.use(express.json());//middlewares
app.use(cors());//middlewares

app.get('/', (request, response) => {
    response.send('Bem-vindo ao Museu');
});

app.use('/user', userRoutes);

app.all('*', (req, res) =>{
    res.status(404).send('Rota não encontrada');
});

app.listen(port, () => {
    console.log(`Servidor de pé na url: http://localhost:${port}`);
});