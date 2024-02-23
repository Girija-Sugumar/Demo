
const express = require('express')
const app = express()
const port = 3000


app.get('/api/', (req, res) => {
  res.send('Hi first change')
})
app.get('/api/fun', (req, res) => {
  res.send('testing 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
