
const express = require('express')
const app = express()
const port = 7000


app.get('/api/', (req, res) => {
  res.send('something')
})
app.get('/api/test', (req, res) => {
  res.send('something test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
