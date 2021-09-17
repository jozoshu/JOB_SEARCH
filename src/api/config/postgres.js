import pg from "pg";
import settings from "./settings";

export const pgConnect = (app) => {
    const client = new pg.Client({
        host: settings.DB_HOST,
        database: settings.DB_NAME,
        user: settings.DB_USER,
        password: settings.DB_PASSWORD,
        port: settings.DB_PORT
    });

    client.connect();
    app.set({"pg_client": client});
}
