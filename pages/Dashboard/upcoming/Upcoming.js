import React from 'react'

export default function Upcoming() {
  const date=new Date()
  const dateformate = date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
}).split('/').reverse().join('-');
  return (
    <div>
      {console.log(date)}
      {console.log(dateformate)}[/]
    </div>
  )
} 
