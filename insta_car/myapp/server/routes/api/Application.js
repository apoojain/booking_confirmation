const router = require('express').Router();
router.post('/', (req, res, next) => {
    
    const body = req.body;
    console.log(body);
    res.json({data : body});
    
  });
  
  module.exports = router;