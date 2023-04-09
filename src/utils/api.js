import axios from "axios";

export function get(){
    let res =  axios.get('./db.json').then((data)=>data).catch((err)=>console.err(err))
    return {"data":res}
}

