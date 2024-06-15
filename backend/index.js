import express, { json } from 'express';
import comerciosRouter from './routes/comercios.js';
import productosRouter from './routes/Productos.js'
import pedidosRouter from './routes/Pedidos.js'
import sincronizarBaseDeDatos from './config/syncDatabase.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(json());
app.use('/', comerciosRouter);
app.use('/', productosRouter);
app.use('/', pedidosRouter)

sincronizarBaseDeDatos().then(() => {
    console.log("Base de datos iniciada.");
    app.listen(port, () => {
        console.log(`App corriendo en http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Error inicializando la base de datos:', error);
});