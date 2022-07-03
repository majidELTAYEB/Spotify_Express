import Cover from './Cover';
import {useEffect, useState} from "react";
import Axios from "axios";
import album from "./album";

function CoverContaint(){
  let [musicBand, setmusicBand] = useState([])

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    const response = await Axios.get('http://localhost:3001/');
    setmusicBand(response.data);
  }
  return (
    <div  className="CoverContaint">
      {
        musicBand.map((value)=> {
         return (<Cover value={value} />)
        })
      }

    </div>
  )
    }

    export default CoverContaint;
