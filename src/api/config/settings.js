import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export default {
    BASE_DIR: path.join(__dirname, '../../..'),
    ENV: process.env.ENV,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
}
