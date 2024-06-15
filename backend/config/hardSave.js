import Comercio from '../models/Comercio.js';
import Pedido from '../models/Pedido.js';
import Producto from '../models/Producto.js';

async function crearMuestras() {
    await Comercio.bulkCreate([
        { nombre: "McDonald's", detalle: 'Gral Paz 911', imagen: 'https://images.deliveryhero.io/image/pedidosya/restaurants/nuevo-logo-mc-logo.jpg', status: 'Abierto' },
        { nombre: 'Milanga & Co', detalle: 'Av San Martin 17', imagen: 'https://images.deliveryhero.io/image/pedidosya/restaurants/milanga-co.jpg', status: 'Cerrado' },
        { nombre: 'KFC', detalle: 'Av 9 de Julio 36', imagen: 'https://images.deliveryhero.io/image/pedidosya/restaurants/kfc-galerias-pacifico.jpg', status: 'Abierto' },
    ]);
    await Producto.bulkCreate([
        {   nombre: "Big Mac Mediano", 
            detalle: 'Hamburguesa con doble carne, salsa Big Mac, queso derretido, cebolla, lechuga y pepino.', 
            imagen: 'https://images.deliveryhero.io/image/pedidosya/products/912124dc-9f31-4ee8-b131-c366cf9e758c.png?quality=90&height=96&width=96&webp=1&dpi=1.5', 
            comercio: '1',
            precio: 9.5 },
        {   nombre: 'Milanesa med clásica', 
            detalle: 'Milanesa de ternera angus o suprema de pollo y perejil con acompañamiento a elección.', 
            imagen: 'https://images.deliveryhero.io/image/pedidosya/products/d2b8ee12-2d57-4b6c-b263-2fb2de772236.jpg?quality=90&height=96&width=96&webp=1&dpi=1.5', 
            comercio: '2',
            precio: 13.35 },
        {   nombre: 'Grand Leyenda Grande', 
            detalle: 'Dos carnes, tomate, salsa parrillera, dos fetas de provoleta y Salsa Criolla', 
            imagen: 'https://images.deliveryhero.io/image/pedidosya/products/bf993290-8168-4f4a-a7b3-8e91e884e8df.png?quality=90&height=96&width=96&webp=1&dpi=1.5', 
            comercio: '1',
            precio: 18.80 },
    ]);
    await Pedido.bulkCreate([
        {
            producto: "Big Mac Mediano",
            precio: 9.5
        },
        {
            producto: "Grand Leyenda Grande",
            precio: 10.5
        }
    ])
    console.log('Insertados datos de muestra.');
}
export default crearMuestras;