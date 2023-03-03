require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

/*
Aqui invovamos a las rutas.  Aqui conectamos tracks.js con app.js para decirle a tracks que use estas rutas usando un request
*/

//TODO localhost/api/
app.use("/api",require("./routes")) //Le digo que api concatene todo lo que hay en la ruta


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect() 

