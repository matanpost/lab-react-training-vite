import React from 'react'

function IdCard({picture, firstName, lastName, gender, height, birth}) {
  return (
    <div className='card'>
    <div>
       <img src={picture} alt='pic'></img> 
    </div>
    <div>
       <div>
       First Name: {firstName} 
    </div>
    <div>
       Last Name: {lastName} 
    </div>
    <div>
       Gender: {gender} 
    </div>
    <div>
       Height: {height/100}m 
    </div>
    <div>
       Birth: {birth.toLocaleDateString()} 
    </div> 
    </div>
    
    
    </div>
   
  )
  
}

export default IdCard