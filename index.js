import express from "express";
import dotenv from "dotenv";
import { pg_connect } from "./src/api/core/postgres.js";
import { sampleRouter } from "./src/api/sample/router.js";

dotenv.config();

const app = express();
const port = 3000;
pg_connect(app);

app.get("/", (req, res) => {
    res.send("Search My Job!")
});

app.use("/", sampleRouter)

app.listen(port, () => {
    console.log(`Starting server at http://localhost:${port}`)
});
