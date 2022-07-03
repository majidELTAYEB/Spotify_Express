import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Axios from "axios";
import HeadAR from "./HeadAR";

function ContainerArtistes(){

  let artsistename
  let photo
  let [musicArtistes, setmusicArtistes] = useState([])

  useEffect(() => {
    getArtistId();
  }, []);
  const { id } = useParams();
  //console.log(id)
  const getArtistId = async () => {
    const response = await Axios.get('http://localhost:3001/artistes/albums/'+id);
    setmusicArtistes(response.data);
  }
  musicArtistes.map((value)=>{
    artsistename = value.artistsName;
    photo = value.photo
  })
  let info = [artsistename,photo,musicArtistes];

  return (
    <div>
      <HeadAR info={info} />
    </div>

  )
}
export default ContainerArtistes
