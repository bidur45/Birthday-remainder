import React from 'react'

const List = ({ people }) => {
  return (
    <>
    {people.map((person)=>{
       const {id, name, age, image}= person
       return(
        
         <section key ={id} className="person">
           <img src={image} alt={image}/>
           <div>
             <h4>{name}</h4>
             <p>{age}</p>
           </div>
         </section>
         
       )
    }) }
      
    </>
  )
}

export default List
