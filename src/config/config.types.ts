import { AppConfig } from "./app.config";
import * as Joi from "joi";

export interface ConfigType {
    app: AppConfig;
}

export const configSchema = Joi.object({
    APP_MESSAGE_PREFIX: Joi.string().default("Hello "),
});