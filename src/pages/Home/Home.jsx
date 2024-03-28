import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PlayCard from '../../components/molecules/PlayCard';

const Home = () => {

  const plays =  useLoaderData();

  return (

    <>

    {plays.map(play =>  <PlayCard play={play}></PlayCard> )}
      
    </>

  )
}

export default Home