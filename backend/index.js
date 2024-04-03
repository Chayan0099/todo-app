const express = require ('express'); 
const { creattodo, updatetodo } = require('./types');
const { todo } = require('./db.js'); 
const app = express(); 
const port = 3000; 
app.use(express.json()); 

app.post('/createtodo', async (req, res)=>{
    const creatPayload = req.body;  
    const parsePayload = creattodo.safeParse(creatPayload); 
    if (!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return; 
    }

    await todo.create({
        title: creatPayload.title, 
        description: creatPayload.description, 
        completed: false 
    })
    res.json({
        msg:'Todo created'
    })
    
})

app.get('/mytodos', async (req, res)=>{
    const todos = await todo.find({}); 
    res.json({ 
        todos
    })
})

app.put('/completed', async (req, res)=>{
    const updatePayload = req.body; 
    const parsePayload = updatetodo.safeParse(updatePayload); 
    if (!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
        return; 
    }

    await todo.updateOne({
        _id: req.body.id
    },{ 
        completed: true
    })
    res.json({
        msg:"Your todo is completed"
    })
})

app.listen(3000); 