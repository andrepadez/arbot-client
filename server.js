import path from 'path'
import 'dotenv/config'
import express from 'express'
import serveStatic from 'serve-static'

const app = express()
const { PORT } = process.env

app.use(serveStatic('_build/'))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '_build/index.html')))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

module.exports = app