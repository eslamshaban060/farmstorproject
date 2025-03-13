// !!!!!!!!!!!!!!!!!!!!!!!!! BACK TO TOP BUTTON !!!!!!!!!!!!!!!!!!!!!!

// ================= IMPORTING ELEMENTS ===================
import React, { useEffect, useState } from 'react'

const Back_to_top_button = () => {

  const [block_button,setblock_button]=useState(false)
 useEffect(()=>{
    window.addEventListener("scroll",function(){
        if(window.scrollY >100){
           return(
            setblock_button(true)
           )
        }else{
            return(
                setblock_button(false)
            )
        }
  })

 },[])

 const go_to_top=()=>{
    window.scrollTo(
        {
            top:0,
            behavior:'smooth'
        }
    )
 }

  return (
    <div className='back_to_top_button' onClick={()=>{
        go_to_top()

    }} style={{display:block_button===true?"block":"none"}}  >
      <button className=' rounded-5 btn   text-white '>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  )
}

export default Back_to_top_button
