import { AppConfig } from "./app.config";
import * as Joi from "joi";

export interface ConfigType {
    app: AppConfig;
}

export const configSchema = Joi.object({
    APP_MESSAGE_PREFIX: Joi.string().default("Hello "),
    DB_HOST: Joi.string().default("localhost"),
    DB_PORT: Joi.number().default(5432),
    DB_USER: Joi.string().default("postgres"),
    DB_PASSWORD: Joi.string().default("postgres"),
    DB_DATABASE: Joi.string().default("tasks"),
});