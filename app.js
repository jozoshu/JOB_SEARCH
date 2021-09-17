import express from "express";
import { pgConnect } from "./src/api/config/postgres";
import { apieRouter } from "./src/api/router";

export const app = express();

// postgres
pgConnect(app);

// route
app.get("/", (req, res) => {
    res.send("Search My Job!")
});
app.use("/api", apieRouter)
