const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')

app.use(express.json());
app.use(cookieParser())
app.use(cors());

app.use(morgan('dev'));

app.use('*',(req,res) => {
    res.render('index')
})

const port = process.env.PORT || 3010;

const host  = process.env.HOST || '127.0.0.1' ;

app.listen(port, host , () => {
    console.log(host);
    console.log(`${port} is running`);
});