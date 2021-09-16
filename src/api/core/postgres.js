import pg from "pg";

export const pg_connect = (app) => {
    const client = new pg.Client({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    });

    client.connect();
    app.set({"pg_client": client});
}

