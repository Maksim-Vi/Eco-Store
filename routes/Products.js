const mongoose = require('mongoose')
const fs = require('fs');
const Product = require('../models/Products');
const { parse } = require('path');

const getAll = (req,res) => {
    Product.find()
        .exec()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({massage:'some thing happened',err}));
};

const getId = (req,res) => {
    Product.findOne({id: req.params.id}, req.body)
        .exec()
        .then(product => res.json(product))
        .catch(err => res.status(500).json({massage:'some thing happened',err}));
};

const create = (req,res)=>{
    let body = JSON.parse(req.body.product)
    console.log('file', req.files);
    let image = null
    if(req.files !== undefined){
        if(req.files.image !== undefined){
            const file = req.files.image;
            const item = file.find(item => {return item.path})
            // console.log('image', image.path);      
            image = item.path;  
        } else{
            image = null
        }
        if (req.files.image1 !== undefined){
            const file = req.files.image1;
            const item = file.find(item => {return item.path})
            // console.log('image1', image1.path);
            image1 = item.path;  
        } else{
            image1 = null
        } 
        if (req.files.image2 !== undefined){
            const file = req.files.image2;
            const item = file.find(item => {return item.path})
            //console.log('image2', image2.path);
            image2 = item.path;  
        } else{
            image2 = null
        }
        if (req.files.image3 !== undefined){
            const file = req.files.image3;
            const item = file.find(item => {return item.path})
            console.log('image3', item.path);
            image3 = item.path;     
        }  else{
            image3 = null
        }
    }
    Product.create({
         _id: new mongoose.Types.ObjectId(),
         id: body.id,
         sale:body.sale,
         salePrice:body.salePrice,
         name: body.name,
         type: body.type,
         price: body.price,
         inStock: body.inStock,
         image: image,
         image1: image1,
         image2: image2,
         image3: image3,
         description:body.description,
         descriptionTable:body.descriptionTable
        })
    .then(result => {
        res.json({
            message:'Create Product successful',
            CreateProduct: result
        })
    })
    .catch(err => res.status(500).json({massage:'some thing happened',err}));
};

const update = (req,res)=>{
    const body = JSON.parse(req.body.product);
    console.log('body',body);
    let image = null
    let image1 = null
    let image2 = null
    let image3 = null
    if(req.files !== undefined){
        // console.log('files = ', req.files);
        
        if(req.files.image !== undefined){
            fs.unlink(body.image, (err) => {
                if (err) {
                    console.log("failed to delete local image:" + err);
                } else {
                    console.log('successfully change local image');                     
                }
            })
            const file = req.files.image;
            const item = file.find(item => {return item.path})
            // console.log('image', image.path);      
            image = item.path;  
        } else{
            image = body.image
        }
        if (req.files.image1 !== undefined){
            fs.unlink(body.image1, (err) => {
                if (err) {
                    console.log("failed to delete local image:" + err);
                } else {
                    console.log('successfully change local image');                            
                }
            })  
            const file = req.files.image1;
            const item = file.find(item => {return item.path})
            // console.log('image1', image1.path);
            image1 = item.path;  
        } else{
            image1 = body.image1
        } 
        if (req.files.image2 !== undefined){
            fs.unlink(body.image2, (err) => {
                if (err) {
                    console.log("failed to delete local image:" + err);
                } else {
                    console.log('successfully change local image');                            
                }
            })
            const file = req.files.image2;
            const item = file.find(item => {return item.path})
            //console.log('image2', image2.path);
            image2 = item.path;  
        } else{
            image2 = body.image2
        }
        if (req.files.image3 !== undefined){
            fs.unlink(body.image3, (err) => {
                if (err) {
                    console.log("failed to delete local image:" + err);
                } else {
                    console.log('successfully chanhe local image');                   
                } 
            })  
            const file = req.files.image3;
            const item = file.find(item => {return item.path})
            console.log('image3', item.path);
            image3 = item.path;     
        }  else{
            image3 = body.image3
        }
    } 
    Product.findOneAndUpdate({id: req.params.id},{
        id: body.id,
        sale:body.sale,
        salePrice:body.salePrice,
        name: body.name,
        type: body.type,
        price: body.price,
        inStock: body.inStock,
        image: image,
        image1: image1,
        image2: image2,
        image3: image3,
        description:body.description,
        descriptionTable:body.descriptionTable      
    })
    //.exec()
    .then(result => res.json(
        {
        message:'Update Product successful',
        CreateProduct: result
        }
    ))
    .catch(err => res.status(500).json({massage:'some thing happened',err}));
}; 

const remove = (req,res)=>{
    fs.unlink(req.body.image, (err) => {
        if (err) {
            console.log("failed to delete local image:" + err);
        } else {
            console.log('successfully deleted local image');                                
        }
    })
    fs.unlink(req.body.image1, (err) => {
        if (err) {
            console.log("failed to delete local image:" + err);
        } else {
            console.log('successfully deleted local image');                                
        }
    })
    fs.unlink(req.body.image2, (err) => {
        if (err) {
            console.log("failed to delete local image:" + err);
        } else {
            console.log('successfully deleted local image');                                
        }
    })
    fs.unlink(req.body.image3, (err) => {
        if (err) {
            console.log("failed to delete local image:" + err);
        } else {
            console.log('successfully deleted local image');                                
        }
    })
    Product.deleteOne({id: req.params.id})
        .exec()
        .then(() => res.json({
            success: true
        }))
        .catch(err => res.status(500).json({massage:'some thing happened',err}));
};


module.exports = {getAll,getId,create,update,remove};