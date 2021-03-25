
const express= require("express");
const router= new express.Router();
const Player= require("../model/players");


//Reading player data
router.get("/players", async(req, res)=>{
     
    try {
        const getPlayers= await Player.find({}).sort({"rank":1});
            res.send(getPlayers);
        
    } catch (error) {
        res.status(400).send(error);
        
    }
})

//Adding players to db
router.post("/players",async(req,res)=>{
    try {
     const addPlayers= new Player(req.body);
    // console.log(addPlayers);
     const savePlayers= await addPlayers.save()
     res.status(201).send(savePlayers); 
    } catch (error) {
        res.status(400).send(error);
    }

})

//Handling players based on IDs with get request

router.get("/players/:id", async(req, res)=>{
    try {
        const _id= req.params.id;
        const getPlayer= await Player.findById(_id);
        res.send(getPlayer);
        
    } catch (error) {
        res.send(error);
        
    }
})

//Updating players based on passed params.
router.patch("/players/:id", async(req, res)=>{
    try {
        const _id= req.params.id;
        const getPlayer1= await Player.findByIdAndUpdate(_id, req.body,{new:true});
        res.send(getPlayer1);
        
    } catch (error) {
        res.status(500).send(error);
        
    }
})

//Delete request

router.delete("/players/:id", async(req, res)=>{
    try {
        const _id= req.params.id;
        const toDeletePlayer= await Player.findByIdAndDelete(_id);
        res.send(toDeletePlayer);
        
    } catch (error) {
        res.send(error)
        
    }
})

module.exports= router;