import express, { Express } from "express"
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

import todoRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(todoRoutes);

const uri: string = (process.env.MONGODB_URL as string);

console.log('uri', uri)

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions)
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));


app.listen(PORT, () => console.log("Server running on port " + PORT));