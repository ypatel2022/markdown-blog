require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()



mongoose.connect(`${process.env.MONGODB_URL}/blogDB`, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.set('view engine', 'ejs')

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter);


let port = process.env.PORT;
if (port == null || post == "") {
  port = 3000;
}

app.listen(port, () => console.log("Server has started successfully"));