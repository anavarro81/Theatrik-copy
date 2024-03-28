import React from 'react'
import { useParams } from 'react-router-dom'

const BookingPage = () => {

  const {id} = useParams();

  console.log('Recibo: ', id);
  
  return (
    <div>BookingPage</div>
  )
}

export default BookingPage