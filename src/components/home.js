import React from 'react'
import { useContext } from 'react'
import {Context} from "../context/authContext"

function home() {
  
  const authContext = useContext(context)
  console.log(authContext);
  
  return (
    <div>esto deberia ser el home</div>
  )
}

export default home
