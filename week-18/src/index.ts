import express from "express";
import {PrismaClient} from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.get("/users", ()=>{
    const users = client.user.findMany();
})