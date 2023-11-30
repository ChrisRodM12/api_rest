const Joi = require('joi');

const id = Joi.number()
const event_name = Joi.string().min(5).max(255)
const event_lastname = Joi.string().min(3).max(255)
const event_division = Joi.string().min(3).max(255)
const event_style = Joi.string().min(3).max(100)
const event_localization = Joi.string().min(2).max(255)


const createEventSchema = Joi.object({
    event_name: event_name.required(),
    event_lastname: event_lastname.required(),
    event_division: event_division.required(),
    event_style: event_style.required(),
    event_localization: event_localization.required(),
    
});

const updateEventSchema = Joi.object({
    event_name: event_name.required(),
    event_lastname: event_lastname.required(),
    event_division: event_division.required(),
    event_style: event_style.required(),
    event_localization: event_localization.required(),
});

const getEventSchema = Joi.object({
    id: id.required()
});

module.exports = {
    createEventSchema,
    updateEventSchema,
    getEventSchema
}