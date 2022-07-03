import logo from "./clonify-logo.svg";
import { Link } from 'react-router-dom';
import Album from "./album";
function NavBar(){

  let navitem = 'navitem';
  let navcontain = 'navcontaint';
return(
    <div className={navcontain}>
      <div className="containtlogo">
           <img className="logo" src={logo}/>
      </div>
      <div className='containHome'>
        <div>
          <div>
            <ion-icon name="home-outline"></ion-icon>
        </div>
          <div>
            <p>Home</p>
          </div>
        </div>
      </div>

      <div className='containHome'>
        <div>
          <div>
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <div>
            <p>Search</p>
            <Link to={{pathname:"/album/"}}>hello</Link>
          </div>
        </div>
      </div>

      <div className='containHome'>
        <div>
          <div>
            <ion-icon name="musical-notes-outline"></ion-icon>
          </div>
          <div>
            <p>Genres</p>
          </div>
        </div>
      </div>






    </div>


)


}

export default NavBar;
