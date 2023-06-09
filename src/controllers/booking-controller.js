 const {StatusCodes}=require("http-status-codes")
 
 const {BookingService}=require('../services')
 const {ErrorResponse,SuccessResponse}=require("../utils/common")

async function createBookings(req,res){

  // console.log(req.body)
   try{

      //console.log(req.body)
     
      const response=await BookingService.createBooking({
         flightId:req.body.flightId,
         userId:req.body.userId,
         noOfSeats:req.body.noOfSeats
       
       },
   
       );
      SuccessResponse.data=response;
      return res
          .status(StatusCodes.OK)
          .json(SuccessResponse)

   }
   catch(error){
    
      console.log(error)
      ErrorResponse.error=error;
      return res
              .status(StatusCodes.INTERNAL_SERVER_ERROR )
              .json(ErrorResponse)
   }
}



module.exports={createBookings}