import app from "./app.js";

const PORT = 3000;

app.listen(PORT, ()=>{
    console .log ('The server is alive on port ${PORT}');
})