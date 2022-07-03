import './HeadAR.css'
import {Link, link} from "react-router-dom";
import NavBar from "./NavBar";
function HeadAR(info){
  //console.log(info.info[2])
  return(<div className='conteneur'>
      <NavBar />
      <div className='ContaintHeadAR'>
        <div className='imgContaint'>
      <img src={info.info[1]} />
      <h1>{info.info[0]}</h1>
      </div>
        <div className='CoverContaint'>
        {info.info[2].map((value)=>{
          console.log(value)
          return(
            <article>
              <div>
                <img className='imgCover' src={value.cover}/>
              </div>
              <div>
                <p className='alName'>{value.albumName}</p>
                <Link to={{pathname:"/album/"+value.albumId}}>{value.albumName}</Link>
              </div>
        </article>

          )
        })}
      </div>
      </div>

  </div>

  )
}

export default HeadAR
