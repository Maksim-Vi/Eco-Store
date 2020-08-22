const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const rout = require('./routes/router')
const path = require('path')
var ghpages = require('gh-pages');
const BodyParser = require('body-parser')
const app = express();

app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json());
app.use('/uploads',express.static('uploads'))
app.use('/uploadsimage',express.static('uploadsimage'))

ghpages.publish('client', function(err) {console.log(err)});

app.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS'){
        res.header('access-control-allow-methods', 'PUT,POST,GET,DELETE,PATCH');
        return res.status(200).json('Option all good')
    }
    next();
});

if(process.env.NODE_ENV === 'production'){
    app.use('/Eco-Store/', express.static(path.join(__dirname,'client','build')))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.thml'))
    })
}

rout(app)

app.get('/Eco-Store/test', (req,res)=>{
    res.status(200).json({message: "Get is done"})
    console.log("all is good");
});

const PORT = config.get('port') || 3012

async function start() {
    try {
      await mongoose.connect(config.get('mongoURI'),{
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex:true,
          useFindAndModify: false
      })
      app.listen(PORT, ()=> console.log(`Server hes been sterted on ${PORT}...`));
    } catch (err) {
        console.log('Server error:', err.message);
        process.exit(1); // выход из процеса старта сервера     
    }
}

start();
