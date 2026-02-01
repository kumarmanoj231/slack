import express from "express"
import { ENV } from "./config/env.js";

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello World 123!");
});

app.listen(ENV.PORT, ()=> console.log(`app is listening at port ${ENV.PORT}`));