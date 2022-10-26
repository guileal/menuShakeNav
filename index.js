import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('hello')
    console.log(__dirname)
})

app.listen(port, () => {
    console.log(`Server online on port ${port}`)
    console.log('CTRL + C to shutdown server')

})