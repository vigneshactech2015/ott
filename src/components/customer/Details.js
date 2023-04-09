import React,{useEffect,useState} from 'react';
import style from "./details.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function Details() {
    const[movieName , setMovieName] = useState('')
    const[url,setUrl] = useState('')
    const[banner,setBanner] = useState('')
   
    useEffect(()=>{
        setMovieName(sessionStorage.getItem('moviedetails'))
        setUrl(sessionStorage.getItem('url'))
        setBanner(localStorage.getItem('banner')||'')
    },[])

    const navigate = useNavigate()

    function homeHandler(){
      localStorage.clear()
      sessionStorage.clear()
      navigate(-1)
    }

  return (
    <div className={style.detailsContainer}>
    
    <Container>
    <div className="ratio ratio-21x9">
  <iframe src={banner!==''?"https://www.youtube.com/embed/_InqQJRqGW4":url} title={movieName} allowFullScreen></iframe>
    </div>
    </Container>
    <h2 className={style.moviename}>{banner!==''?"Money Heist":movieName}</h2>
    <Button variant="contained" className={style.backButton} size="small" onClick={homeHandler}>Home</Button>
    </div>
  )
}

export default Details