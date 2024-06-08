const bodyParser = require('body-parser');
const express = require('express');
const app = new express();
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());
const testmodel = require('./schema');

app.post('/postapi', async(req, res) => {
      console.log(req.body);
      await new testmodel(req.body).save();
    res.send({
        "Massage": "Data Saved!!"
    });
})

app.get('/postapi', async(req, res) => {
    const alluser =await testmodel.find();
    alluser.length > 0? res.send(alluser):
    res.send({"Massage": "Data Not Found!!"});
})

app.delete('/postapi/:id', async(req, res) => {
   const data = await testmodel.deleteOne({_id:req.params.id})
   data.deletedCount == 1? res.send({"Massage": "Data Deleted!!"}):
   res.send({"Massage": "Data Not Found!!"});
})

app.put('/postapi/:id', async(req, res) => {
   const data = await testmodel.updateOne(
    {_id: req.params.id},
    {
        $set: {name: "Mohan"}
    }
   )
   data.modifiedCount==1?res.send({"Massage": "Data Modified!!"}):
   res.send({"Massage": "Data Not Found!!"});
})

// ------------------SIGNUP API-----------------------

app.get('/postapi/:key', async(req, res) => {
   const data = await testmodel.find( { $or: [ 
     { name: req.params.key }, 
     { _id: req.params.key },
     { email: req.params.key },
     { password: req.params.key }
  ]});
  data.length > 0? res.send(data):
  res.send({"Massage": "Data Not Found!!"});
  console.log(data);
})

// ------------------SIGNUP API-----------------------

app.post('/login', async(req, res) => {
    console.log(req.body.email);
    const data = await testmodel.findOne({
        email:req.body.email,
        password: req.body.password
    }); 
    console.log(data);
    res.send(data);
});

app.listen(11000,()=>console.log("Server Created!!"));