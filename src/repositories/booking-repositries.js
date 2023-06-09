const {StatusCodes}=require('http-status-codes');
const CrudRepositery=require("./crud-repositries");
const booking=require('../models')

class BookingRepository extends CrudRepositery{
   constructor(){
      super(booking);
   }
}

   module.exports={
      BookingRepository
   }