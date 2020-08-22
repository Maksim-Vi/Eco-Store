const products =  require('./Products');
const top = require('./Top')
const auchMiddleware = require('../Middleware/Middleware');
const router = require('./auth.routes')
const {form, formStore} = require('./../routes/nodemailer')
const multer = require('multer')
// конфигурация папки куда будут сохранятся картинки 

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, './uploads/')
    },
    filename: function(req,file,cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const storageTop = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, './uploadsimage/')
    },
    filename: function(req,file,cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const fileFilter = (req,file,cb) =>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    } else{
        cb(null, false) 
    }
}

const upload = multer({
    storage: storage, 
    limits:{
    fileSize: 1024*1024*5
    },
    fileFilter: fileFilter
})

const uploadTop = multer({
    storage: storageTop, 
    limits:{
    fileSize: 1024*1024*5
    },
    fileFilter: fileFilter
})

module.exports = (app) => {
    // Products
    app.get('/products',auchMiddleware,  products.getAll);
    app.get('/products/:id',auchMiddleware, products.getId);
    app.post( '/products',auchMiddleware, upload.fields([{ name: 'image',  maxCount: 1 },{name: 'image1',  maxCount: 1 },{name: 'image2' ,  maxCount: 1 },{name: 'image3',  maxCount: 1 }]), products.create);
   
    app.put('/products/:id',auchMiddleware,upload.fields([{ name: 'image',  maxCount: 1 },{name: 'image1',  maxCount: 1 },{name: 'image2' ,  maxCount: 1 },{name: 'image3',  maxCount: 1 }]), products.update);
    app.delete( '/products/:id',auchMiddleware,  products.remove);
    
    // auch
    app.use('/Eco-Store/auth', router);

    //Send email
    app.post('/MainLink/form',form);
    app.post('/StoreBasket/form',formStore);

    //Top
    app.get('/top',auchMiddleware,  top.getAllTop);
    app.post( '/top',auchMiddleware, uploadTop.single('image'),  top.createTop);
    app.put('/top/:id',auchMiddleware,uploadTop.single('image'), top.updateTop);
};
