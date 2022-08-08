const router = require('express').Router();
const path =require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination:(req,file,cb) => cb(null,'uploads/'),
    filename: (req,file,cb) =>{
        const uniqueName =`${Date.now()}-${Math.round(Math.random() *1E9)}${path.extname(file.originalname)}`;
        cb(null,uniqueName);
    }
})

let upload = multer({
    storage,
    limit: { filesize: 1000000*100}
}).single('myfile');


router.post('/',(req,res) => {
    //validate request
    if(req.file) {
        
        return res.json({ error : 'all fields are required.'});
    }
  //store file
  upload(req,res, (err) => {


    if(err){
        return res.status(500).send({ error: err.message})
    }
    //store into databse
    

  });




})