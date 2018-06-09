const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 2005);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`)
})

app.get('/', (req, res) => {
    res.render('index');
  });
