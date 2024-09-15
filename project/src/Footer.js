import React from 'react'

const Footer = ({length}) => {
const year = new Date();
  return (
   <footer>
{length} {length > 1 ? "tasks" : "task" } available
   </footer>
  )
}

export default Footer