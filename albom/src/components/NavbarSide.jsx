import React from 'react'
import { Link } from 'react-router-dom'

function NavbarSide() {
  return (
    <>
      <Link to="/">home</Link><br />
      <Link to="/add">add</Link>
    </>
  )
}

export default NavbarSide