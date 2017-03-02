var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  'article-one' : {
      title: 'Article-One',
      date: 'Feb 2, 2017',
      heading: 'My First Article',
      content: 
        `<p> 
        Here goes my first article. Not much to say here just that, I would like to learn a lot. Here goes my first article. Not much to say 
        here just that, I would like to learn a lot. Here goes my first article. Not much to say here just that, I would like to learn a lot.
        Here goes my first article. Not much to say here just that, I would like to learn a lot. Here goes my first article. Not much to say 
        here just that, I would like to learn a lot.
        </p>`},
  'article-two' : {
      title: 'Article-Two',
      date: 'Feb 2, 2017',
      heading: 'My Second Article',
      content: 
        `<p> 
        Here goes my second article.
        </p>`},
  'article-three' : {
      title: 'Article-Three',
      date: 'Feb 2, 2017',
      heading: 'My Third Article',
      content: 
        `<p> 
        Here goes my third article.
        </p>`}
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <!doctype html>
    <html>
        <head>
            <link href="/ui/style.css" rel="stylesheet" />
            <title> 
                ${title} 
            </title>
        </head>
        <body class = article-body>
            <div>
                <h1 class = bold> 
                    ${heading}
                </h1>
                <hr>
                <p> 
                    ${date} 
                </p>
                <p> 
                    ${content}
                </p>
            </div>            
        </body>
    </html> `;
    return htmlTemplate;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

/*app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});


app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
