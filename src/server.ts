import express, { Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.get("/", (req: Request, res: Response) => {

   return res.send("ok");
})

server.listen(process.env.PORT, () => console.log(`server is running in port ${process.env.PORT}!`))