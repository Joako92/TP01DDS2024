import sequelize from './database.js';
import hardSave from './hardSave.js';

async function sincronizarBaseDeDatos() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida.');
        
        await sequelize.sync({ force: true }); // {force: true} baja la bdd y la crea de nuevo
        console.log('Base de datos sincronizada.');

        // Hardcodeo las bases
        await hardSave();

    } catch (error) {
        console.error('No fue posible conectar con la base de datos: ', error);
    }
}

export default sincronizarBaseDeDatos;