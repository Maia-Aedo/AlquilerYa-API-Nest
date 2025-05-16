import 'dotenv/config';
import * as joi from 'joi';

// Interfaz que mejora el tipado del codigo 

interface EnvVars {
    PORT: number;
}

// Configuración d eesquema JOI

const envsSchema = joi
    .object({
        PORT: joi.number().required(), // Le damos un tipo y si es requerido
    })
    .unknown(true);

const { error, value } = envsSchema.validate(process.env);
if (error) throw new Error(`Config validation error:${error.message}`);

// Si viene el valor, lo guardamos en una variable que va a ser del tipo ya creado
const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
}