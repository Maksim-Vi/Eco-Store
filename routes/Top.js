const mongoose = require('mongoose')
const fs = require('fs');
const Top = require('../models/Top')


const getAllTop = (req,res) => {
    Top.find()
        .exec()
        .then(top => res.json(top))
        .catch(err => res.status(500).json({massage:'some thing happened',err}));
};

const createTop = (req,res)=>{   
    let body = JSON.parse(req.body.state)
    
    let image = null
    if(req.file !== undefined){
        image = req.file.path
    } else {
        image = body.image
    }
    Top.create({
        _id: new mongoose.Types.ObjectId(),
        id: body.id,
        image: image,
        text1: body.text1,
        text2: body.text2,
        text3: body.text3
        })
    .then(result => {
        res.json({
            message:'Create Top successful',
            CreateTop: result
        })
    })
    .catch(err => res.status(500).json({massage:'some thing happened',err}));
};

const updateTop = (req,res)=>{
    let body = JSON.parse(req.body.state)
    let image = null

    if(req.file !== undefined){
         image = req.file.path
        fs.unlink(body.image, (err) => {
            if (err) {
                console.log("failed to delete local image:" + err);
            } else {
                console.log('successfully deleted local image');                                
            }
        })
    } else {
         image = body.image
    }
    Top.findOneAndUpdate({id: req.params.id},{
        id: body.id,
        image: image,
        text1: body.text1,
        text2: body.text2,
        text3: body.text3
    })
    // .exec()
    .then(result => res.json(
        {
        message:'Update Top successful',
        ChangeTop: result
        }
    ))
    .catch(err => res.status(500).json({massage:'some thing happened',err}));
}; 

module.exports = {getAllTop,createTop,updateTop};