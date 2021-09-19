import { Client } from 'pg';
import settings from './settings';

const pgClient = () => {
    const client = new Client({
        host: settings.DB_HOST,
        database: settings.DB_NAME,
        user: settings.DB_USER,
        password: settings.DB_PASSWORD,
        port: settings.DB_PORT
    });
    client.connect(err => {
        if (err) {
            console.log('DB Connection Error:', settings.DB_HOST);
        }
    })
    return client
}

export default pgClient
