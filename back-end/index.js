const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

const brandRoutes = require('./routes/brandRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const gendersRoutes = require('./routes/genderRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');


app.use(express.json());//middlewares
app.use(cors());//middlewares

app.get('/', (request, response) => {
    response.send('Bem-vindo à API da Digital Store');
});

app.use('/user', userRoutes);
app.use('/marcas', brandRoutes);
app.use('/categories', categoriesRoutes);
app.use('/generos', gendersRoutes);
app.use('/reviews', reviewsRoutes);

app.all('*', (req, res) =>{
    res.status(404).send('Rota não encontrada');
});

app.listen(port, () => {
    console.log(`Servidor de pé na url: http://localhost:${port}`);
});