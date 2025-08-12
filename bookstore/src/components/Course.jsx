import React, { useEffect, useState } from 'react';
import list from "../assets/list.json"
import Cards from './Cards';
import {Link} from "react-router-dom";
import axios from "axios"

function Course() {
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res= await axios.get("http://localhost:4001/book");
       console.log(res.data)
       setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className= "max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className='mt-28 items-center justify-center justify-items-center'>
        <h1 className='text-2xl md:text-4xl'>
          We're delighted to have you <span className='text-pink-500'>here! :)</span> 
        </h1>
        <p className='mt-12 '>
        Every bookshop has a personality. Some are cozy, some are grand, some are chaotic like a genius’s mind, while others are minimalistic like a Zen poem. The way books are arranged, the staff recommendations, and even the scent of paper—each element tells its own story.
        </p>
        <Link to='/'>
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-med hover:bg-pink-700 duration-300'>
          Back 
        </button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  );
}

export default Course;  // ✅ Ensure this is present
