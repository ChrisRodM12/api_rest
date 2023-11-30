//Crear un enrutador de express en el que todas las rutas inician con api
const router = require('express').Router();
const {validatorHandler} = require('../middlewares/validator.handler');
const { getEventSchema, createEventSchema, updateEventSchema } = require('../schemas/events.schema');
//Importar el controlador de eventos
const service = require('../services/events.service');

//Definir las rutas de la aplicación
router.get('/', async (req,res)=>{
    const event = await service.index()
    res.json(event);
});

router.get('/:id', 
    validatorHandler(getEventSchema, 'params'), 
    async (req,res)=>{
        const id = req.params.id
        const event = await service.show(id)
        res.json(event)
    }
);

router.post('/', 
    validatorHandler(createEventSchema, 'body'),
    async (req,res)=>{
        const body = req.body
        const event = await service.store(body)
        res.json(event)
    }
);

router.put('/:id', 
    validatorHandler(updateEventSchema, 'body'),
    async (req,res)=>{
        const id = req.params.id
        const body = req.body
        const event = await service.update(id, body)
        res.json(event)
    }
);

router.delete('/:id', 
    validatorHandler(getEventSchema, 'params'), 
    async (req,res)=>{
        const id = req.params.id
        const event = await service.destroy(id)
        res.json(event)
    }
);

//Exportar el enrutador
module.exports = router;