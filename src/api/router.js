import express from 'express';
import { sampleRouter } from "./sample/router";

export const apieRouter = express.Router();

apieRouter.use("/sample", sampleRouter);
