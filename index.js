import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT || 8080

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log(`Server online on port ${port}`)
    console.log('CTRL + C to shutdown server')

})