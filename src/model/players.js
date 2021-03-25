const express= require("express");
const mongoose= require("mongoose");

//Player Schema
const playerSchema= {
    rank: Number,
    player: String,
    team: String,
    rating: Number

}
//player model for db
const Player= mongoose.model("Player", playerSchema);

module.exports= Player;