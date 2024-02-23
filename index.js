
const express = require('express')
const app = express()
const port = 7000


app.get('/api/', (req, res) => {
  res.send('check first')
})
app.get('/api/test', (req, res) => {
  res.send('test first')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
