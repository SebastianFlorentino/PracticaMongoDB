// Import the MongoDB client and dotenv
const { MongoClient } = require('mongodb');
require('dotenv').config();

// Getting connection URI from environment variables
const uri = process.env.MONGODB_URI;

// Creating the MongoDB client instance
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Data from the Dominican provinces
const provincias = [
    { nombre: 'Azua', region: 'Sur' },
    { nombre: 'Baoruco', region: 'Sur' },
    { nombre: 'Barahona', region: 'Sur' },
    { nombre: 'Dajabón', region: 'Noroeste' },
    { nombre: 'Distrito Nacional', region: 'Ozama' },
    { nombre: 'Duarte', region: 'Nordeste' },
    { nombre: 'Elías Piña', region: 'Sur' },
    { nombre: 'El Seibo', region: 'Este' },
    { nombre: 'Espaillat', region: 'Norte' },
    { nombre: 'Hato Mayor', region: 'Este' },
    { nombre: 'Hermanas Mirabal', region: 'Nordeste' },
    { nombre: 'Independencia', region: 'Sur' },
    { nombre: 'La Altagracia', region: 'Este' },
    { nombre: 'La Romana', region: 'Este' },
    { nombre: 'La Vega', region: 'Norte' },
    { nombre: 'María Trinidad Sánchez', region: 'Nordeste' },
    { nombre: 'Monseñor Nouel', region: 'Norte' },
    { nombre: 'Monte Cristi', region: 'Noroeste' },
    { nombre: 'Monte Plata', region: 'Ozama' },
    { nombre: 'Pedernales', region: 'Sur' },
    { nombre: 'Peravia', region: 'Sur' },
    { nombre: 'Puerto Plata', region: 'Norte' },
    { nombre: 'Samaná', region: 'Nordeste' },
    { nombre: 'San Cristóbal', region: 'Ozama' },
    { nombre: 'San José de Ocoa', region: 'Sur' },
    { nombre: 'San Juan', region: 'Sur' },
    { nombre: 'San Pedro de Macorís', region: 'Este' },
    { nombre: 'Sánchez Ramírez', region: 'Norte' },
    { nombre: 'Santiago', region: 'Norte' },
    { nombre: 'Santiago Rodríguez', region: 'Noroeste' },
    { nombre: 'Santo Domingo', region: 'Ozama' },
    { nombre: 'Valverde', region: 'Noroeste' }
];

// Main function
async function main() {
    try {
        // Connecting to the client
        await client.connect();

        // Accessing the database and collection
        const database = client.db('dominican_republic');
        const collection = database.collection('provincias');

        // Inserting the data
        await collection.insertMany(provincias);
        console.log('Datos insertados correctamente');

        // Querying the data
        const results = await collection.find({}).toArray();
        console.log('Datos en la colección:');
        console.log(results);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Closing the client
        await client.close();
    }
}

// Running the main function
main().catch(console.error);