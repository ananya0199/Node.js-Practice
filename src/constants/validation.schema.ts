import Joi from "joi"

export const loginSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password:Joi.string().min(5).max(30).required()
})

export const signupSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password: Joi.string().token().min(5).max(30).required(),
    username: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
})