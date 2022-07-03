import * as React from "react";
import NavBar from "./NavBar";


import CoverContaint from './CoverContaint'

function Accueil(){
  let PageContaint = 'PageContaint';

  return( <div className={PageContaint}>
              <NavBar />
              <CoverContaint />
         </div>
  )
}

export default Accueil
