function Headalbum(Cover){
  console.log(Cover.Cover.musicAlbums)
  return(
    <div className='HeadMus'>
    <div className='ContaintAL'>
      <div className='ContaintCov'>
         <img src={Cover.Cover.Cover}/>
       </div>
         <div className='ContaintTit'>
           <div>
             <h1 className="ALname">{Cover.Cover.nameAL}</h1>
           </div>
           <div>
             <h4 className="txtHead">{Cover.Cover.nameAR}</h4>
           </div>
           <div>
             <p className="txtHead">{Cover.Cover.description}</p>
           </div>
           <div>
             <p className="txtHead">{Cover.Cover.nombreMusic} titres {Cover.Cover.dateSortie}</p>
           </div>

         </div>
       </div>
       <div className="musicLis">
            <ul>
              {Cover.Cover.musicAlbums.map((value)=>{
                return(
                  <li><div><ion-icon name="play-outline"></ion-icon></div>
                      <div><p>{value.trackName}</p></div>
                      <div><p>{value.artistName}</p></div>
                      <div><p>{value.duration}</p></div>
                  </li>
                )
              })}
            </ul>
       </div>
    </div>
     )
}

export default Headalbum;
