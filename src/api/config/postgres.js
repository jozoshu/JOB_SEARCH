import { Pool } from 'pg';
import settings from './settings';

const pgConnect = () => {
    const pool = new Pool({
        host: settings.DB_HOST,
        database: settings.DB_NAME,
        user: settings.DB_USER,
        password: settings.DB_PASSWORD,
        port: settings.DB_PORT
    });
    return pool
}

export default pgConnect
