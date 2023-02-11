const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('[:date[clf]] :method :url HTTP/:http-version', { immediate: true }))

app.get('/', (req, res) => {
  console.log("Query parameters -", JSON.stringify(req.query))
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Leak web server listening on port ${port}`)
})
