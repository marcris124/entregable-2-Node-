//esto es para crear la tabla o modelo como en dbdiagram

const { DataTypes } = require('sequelize')

const db = require("../utils/database")//aqui importamos la instancia de new sequelize 
   //creamos un const con el nombre del modelo y despues creamos los datos de la tabla
const toDo =  db.define('todo'/*aqui colocamos el nombre de la tabla que creamos en la terminal*/,{
//aqui creamos los datos o atributos de nuestra tabla

id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
  },
  title:{
   type:DataTypes.STRING,
   allowNull:false,
  },
  description:{
    type:DataTypes.TEXT,
    allowNull:false,
  },
  status:{
    type:DataTypes.STRING(40),
    allowNull:false
  }

})         

module.exports = toDo; //aqui emportamos el modelo que hicimos que fue toDo
