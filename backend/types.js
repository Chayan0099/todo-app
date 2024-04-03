const zod = require('zod'); 

const creattodo = zod.object({
    title: zod.string(), 
    description: zod.string()
})

const updatetodo = zod.object({
    id: zod.string()
})

module.exports = {
    creattodo: creattodo, 
    updatetodo: updatetodo
}