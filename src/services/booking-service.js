const axios=require('axios');
const db=require('../models');
const {StatusCodes}=require("http-status-codes");
const  AppError = require("../utils/errors/app-error");


const {BookingRepositery}=require('../repositories');


async function createBooking(data){
  return new Promise((resolve,reject)=>{
   
      const result=db.sequelize.transaction(async function bookingImp(){
      const flight=await axios.get(`http://localhost:3000/api/v1/flights/${data.flightId}`)
      
      const flightData=flight.data.data;
      if(  data.noOfSeats >flightData. totalSeats){
         reject ( new AppError('Not enough seats available', StatusCodes.BAD_REQUEST))
        }
      resolve(true);
      })

  }
 
  )
 

}

module.exports={createBooking}