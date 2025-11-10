import express from "express"

const app = express()
app.use(express.json());

app.get("/asanali",(req,res)=>{
    res.send("Asanali")
})
app.listen(3001,()=>{
    console.log("Сервер запущен")
})