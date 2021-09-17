import pg from 'pg';
import settings from './settings';

const pgConnect = () => {
    const client = new pg.Client({
        host: settings.DB_HOST,
        database: settings.DB_NAME,
        user: settings.DB_USER,
        password: settings.DB_PASSWORD,
        port: settings.DB_PORT
    });
    client.connect();
    return client
}

export default pgConnect
