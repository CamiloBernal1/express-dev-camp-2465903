//1. crear la depencia a express, colors, dotenv
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const listEndpoints = require('express-list-endpoints');
const userRoutes = require('./Routes/UserRoutes');
const bootcampRoutes = require('./Routes/BootcampRoutes');
const courseRoutes = require('./Routes/CourseRoutes');
const reviewRoutes = require('./Routes/ReviewRoutes');
    
    //Definiendo archivo .env
    dotenv.config({
        path: './Config/config.env'
    })
    //crear el objeto app con express
    const app = express();

    //Habilitar express para tratar datos
    //content-type-json
    app.use(express.json())

    // Conectar a la base de datos
    connectDB()
    
    // Definiendo las rutas de prueba 
    app.use('/api/v1/bootcamps', bootcampRoutes)
    app.use('/api/v1/courses', courseRoutes)
    app.use('/api/v1/reviews', reviewRoutes)
    app.use('/api/v1/users', userRoutes)

    //consultar endpoints del proyecto
    console.log(listEndpoints(app));
    //iniciar el devserver
app.listen(process.env.PORT , ()=>{
    console.log('Servidor iniciado'.bgGreen.white);
})