import React from 'react'
import style from "./error.module.css"
import {useNavigate} from "react-router-dom"

function ErrorComponent() {
  const navigate = useNavigate()
  return (
    <div className={style.errorcontainer}>
    <p className={style.errorTxt}>404 Not Found!</p> 
    <button onClick={()=>navigate("/")} className={style.homeButton}>Home</button>
    </div>
  )
}

export default ErrorComponent