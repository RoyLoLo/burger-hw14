const xprs = require(`express`);
const router = xprs.Router();
const burger = require(`../models/burger.js`);

router.get(`/`,(req,res)=>{
  burger.select((data)=>{
    let hbsObj = {
      burgers : data
    };
    res.render('index',hbsObj);
  });
});

router.post(`/api/burgers`,(req,res)=>{
  burger.insert([
    `name`, `devoured`
  ],[
    req.body.name,req.body.devoured
  ],(result)=>{
    res.json({id:result.insertId});
  });
});

router.put(`/api/burgers/:id`,(req,res)=>{
  let condition = `id = ${req.params.id}`;
  burger.update({
    devoured : req.body.devoured
  },condition,(result)=>{
    if (result.changedRows == 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });  
});


module.exports = router;


