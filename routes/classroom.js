var express=require('express');
var router=express.Router();
var pool=require('./pool');


/*Get all list classroom */
router.get('/api/GetALLListClassroom', function(req, res, next) {
    pool.query('select * from ClassRoomManager',(error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.json(result);
            console.log(result);
        }   
    });
});
/*Create classroom */  
router.post('/api/AddNewClassroom', function(req, res, next) {
    let id=req.body.id;
    let tenLop=req.body.tenLop;
    let sql="INSERT INTO ClassRoomManager VALUES('"+id+"', '"+tenLop+"')";
    pool.query(sql,
        (err, result) => {
         if (err) return next(err);
        }
        
       );

});
module.exports= router;