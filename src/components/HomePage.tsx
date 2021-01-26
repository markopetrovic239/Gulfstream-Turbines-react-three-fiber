import BrainCanvas from './BrainCanvas'
import React from 'react'
import './BrainScene.css'
import './home.css'
import nuerotechpinkblue from './neurotechpinkblue.png'

function HomePage(){

  return(
<>
 <div ><table width="100%" className="header">
   <tbody>
   <tr>
<td><h1><b>NEURO-TECH</b></h1></td>
</tr>
</tbody>
</table>
{/* <td><div id="header"><img height="150px" src={nuerotechpinkblue}/></div></td> */}


  </div>
    <BrainCanvas />
    </>
    )


  }

  export default HomePage;