import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
