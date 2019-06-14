const Url = require('../models/Url');
const validUrl = require('valid-url');
const express = require('express');
var router = express.Router();

router.post('/generateurl', (req,res) => {
    let {url} = req.body;
    let {ip} = req.client;

    if(!validUrl.isUri(url))
        res.status(418).send("InvalidURL");

    Url.findOne({url})
        .then(link => {
            if(link)
                res.status(201).json({
                    id: link._id,
                    new: false
                })
            else{
                new Url({url,ip})
                    .save()
                    .then(newUrl => 
                        res.status(201).json({
                            id: newUrl._id,
                            new: true
                        }))
                    .catch(e => res.status(400).send(e));
            }
        })
        .catch(e => res.status(400).send(e));    
});

router.get('/:url', (req,res) => {    
    const {url: id} = req.params;

    Url.findById(id)
        .then(link => {
            if(link)
                res.status(200).json(link.url);
            else
                res.status(404).json({error: "Url not found.", code: 404});
        })
        .catch((e) => res.status(400).send(e));
});

module.exports = router;
