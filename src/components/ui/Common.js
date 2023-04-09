import style from "../customer/Customer.module.css";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../utils/toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export function Banner() {
  const navigate = useNavigate()
  
  function handlePlay(){
    localStorage.setItem('banner','true')
    navigate('/customer/details')
  }

  return (
    <header className={style.banner}>
      <div className={style.banner__contents}>
        <h1 className={style.banner__title}>Money Heist</h1>
        <div className={style.banner__buttons}>
          <button className={style.banner__button} onClick={handlePlay}>Play</button>
        </div>
        <h1 className={style.banner__description}>
          To carry out the biggest heist in history, a mysterious man called The
          Professor recruits a band of eight robbers who have a single
          characteristic: n...
        </h1>
      </div>
      <div className={style.bannerfadeBottom}></div>
    </header>
  );
}

export function Navbar() {
  const navigate = useNavigate();

  function logoutHandler() {
    notifySuccess("User logged out successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <div id="nav" className={style.nav}>
    <Tippy content="Log out">
    <Avatar
        onClick={logoutHandler}
        sx={{ m: 1, bgcolor: "red", cursor: "pointer" }}
      >
        <LockOutlinedIcon />
      </Avatar>
      </Tippy>
      <ToastContainer />
    </div>
  );
}

export function Slider({ datas, title, large = "false" }) {

  const navigate = useNavigate()

  function movieDetailHandler(data){
      let {moviename,video_url} = data
      sessionStorage.setItem('moviedetails',moviename)
      sessionStorage.setItem('url',video_url)
      navigate('/customer/details')
  }

  return (
    <div className={style.row}>
      <h2>{title}</h2>
      <div className={style.row__posters}>
        {datas?.map((data) => {
          return (
            <img
              className={style.row__poster}
              loading="lazy"
              key={data?.id}
              id={large === "true" ? style.row__posterLarge : ""}
              src={data?.image_url}
              alt={data?.moviename}
              onClick={()=>movieDetailHandler(data)}
            />
          );
        })}
      </div>
    </div>
  );
}
