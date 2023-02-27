const {Router} = require("express"); //aqui importamos el router de express
const toDos = require('../models/toDo.model')
 const router = Router(); //creamos una instancia de nuestro router


router.get('/api/v1/todos', async (req,res) =>{//get para obtener toda la informacion  despues colocamos la ruta a la que queremos ingresar
  try {
    const todos = await toDos.findAll({attributes:["id","title","description","status"]})//findAll nos ayuda a traer toda la infomacion de una tabla o modelos que hallamos creado seria como hacer un SELECT * FROM todos
    
    res.json(todos)//lo que hace mandarme toda la informacion del objeto
  } catch (error) {
    res.status(400).json(error) //aqui enviamos el error
  }
})
//post para crear informacion
router.post('/api/v1/todos', async (req,res) =>{//el post funciona como INSERT INTO 
  try {
      const newTodo = req.body //aqui obtenemos la informacion del nuevo objeto del body
      const result = await toDos.create(newTodo)//aqui hacemos una consulta 
      res.status(201).send(result)//aqui respondemos con un 201 y enviamos el resultado que nos da
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/api/v1/todos/:id" , async (req, res) =>{
  try {
    const { id } = req.params;
    const data = req.body;
    await toDos.update(data, {
      where: { id }
    })
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error)
  }
})//put para actualizar informacion

router.delete("/api/v1/todos/:id", async (req, res) =>{
  
  try {
    const { id } = req.params //toma todos los parametros que vengan en la ruta
    const result = await toDos.destroy({
      where:{id} //para eliminar
    })
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error)
  }
})//delete para eliminar informacion

module.exports = router //aqui lo exportamos al app.js
