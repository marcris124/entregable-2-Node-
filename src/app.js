const express = require('express');
const toDo = require('./models/toDo.model');
const db = require('./utils/database') //aqui esportamos lo que tenemos en database
const todoRoutes = require('./routes/toDo.routes')
toDo;

const PORT = 8000;

db.authenticate() //esto nos ayuda a verificar si podemos conectarnos a nuestra base de datos con un catch y un error
  .then( () =>{ // si funciona que nos muestre un console.log
    console.log("conexion a base de datos ok")
    
  })
  .catch(  //esto nos ayuda a declarar si hay un error que nos muestre el error
    (error) => {
    console.log(error);
  })

  db.sync()//esto verifica lo que hay en node y verifica lo que hay en la base de datos
  .then(() => {
    console.log("base de datos sincronizada");
  })
  
  .catch((error) =>{
    console.log(error);
  })
const app = express();

app.use(express.json())

app.use(todoRoutes)

app.use(express.json());

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
})