const express = require('express');
var router = express.Router();
const {mongoose} = require('../db/mongoose');
const shortid = require('shortid');
var {Url} = require('../models/Url');
const validUrl = require('valid-url');
const ip = require('ip');

router.get('/', (req,res) => {
    Url.find({ip: ip.address()}).limit(3).sort([['createdAt', -1]])
        .then((urls) => {
            res.status(200).render('index', {urls: urls});
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

router.post('/generateUrl', (req,res) => {
    let url = req.body.url;
    if(validUrl.isUri(url)){
        Url.findOne({url: url})
            .then((link) => {
                if(link){
                    res.status(201).send(link._id);
                }else{
                    const urlmodel = new Url({
                        url: req.body.url
                    });

                    urlmodel.save().then((newurl) => {
                        res.status(201).send(newurl._id)
                    }).catch((e) => {
                        res.status(400).send(e);
                    });
                }
            })
            .catch((e) => {
                res.status(400).send(e);
            });
    }else{
    	res.status(418).send("InvalidURL");
    }    
});

router.get('/:url', (req,res) => {
    Url.findOne({_id: req.params.url})
        .then((link) => {
            res.status(200).redirect(link.url);
        }, (e) => {
            res.status(400).send(e);
        });
});

module.exports = router;
