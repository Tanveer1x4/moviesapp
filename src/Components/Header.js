import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
   <div style={{display:'flex',backgroundColor:'#c6baba',padding:'0.5rem'}}>
      <img src="https://tse2.mm.bing.net/th?id=OIP.Mk5HSb84pnBkzrYKhI7ISgHaFj&pid=Api&P=0" alt="Logo" width="100" height="70"/>
      <h1 style={{margin:'0 2rem'}}>MovieApp</h1>
      <h4 style={{marginLeft:'2rem',marginTop:'1rem'}}>Favourite</h4>
   </div>
    )
  }
}
