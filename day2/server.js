const express = require('express');
let webpack = require('webpack')
const app = express();
let middle = require('webpack-dev-middleware')

let config = require('./webpack.config5.js')

let compiler = webpack(config)


app.use(middle(compiler))

app.get('/api/user', (req, res) => {
    res.json({ name: 'xzw' })
})

app.listen(3000)