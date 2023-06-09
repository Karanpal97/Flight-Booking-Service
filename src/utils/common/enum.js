const SEAT_TYPE={
   BUSINESS: 'business',
   ECONOMY:'economy',
   PREMIUM_ECONOMY:'premium-economy',
   FIRST_CLASS:'first-class'

}

const Booking_Status={
   BOOKED:'Booked',
   CANCELLED:'Cancelled',
   PENDING:'Pending',
   INITIATED:'Initiated'
}

module.exports={
   SEAT_TYPE,
   Booking_Status
}
//console.log(Booking_Status.BOOKED)