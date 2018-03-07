const proxy = require('http-proxy-middleware')
const Bundler = require('parcel-bundler')
const express = require('express')
const path = require('path')

const bundler = new Bundler(path.join(__dirname, '../index.html'), {
  cache: true
})

const app = express()

app.use('/api', proxy({
  secure: false,
  target: 'https://easy-mock.com/mock/5a1d07011d7fcc245cfb0bdc/example'
}))

app.use(bundler.middleware())

app.listen(8080)
