import React from 'react';
import ItemsList from './ItemsList';
const Content = ({items, handleCheck, handleDelete}) =>{
  
  return (
    <main>
      {items.length > 0 ? (
        <ItemsList
        items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
        />
 
      ) : <p style = {{marginTop : '2rem'}}> your list is empty </p>}
    </main>
  )
}

export default Content;