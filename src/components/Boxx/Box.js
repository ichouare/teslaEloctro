import react from 'react'
import './style.css'
import svg from '../assets/down-arrow.svg'
import styled from  'styled-components'
import Fade from 'react-reveal/Fade';



 
 const SectionBox = styled.div`
  width:100%;
  height:100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  padding: 60px 50px;
  `
 




function Box({title  , discription  , btnleft , btnright , backgroundImg }){
    return(
      
      <SectionBox style={{backgroundImage: `url(${backgroundImg})`}}>
  <Fade bottom>
        <div className='Boxtext'>
        <h1>{title}</h1>
        <p>{discription}</p>
        </div>
       </Fade>
       
        <div className="Boxbtn">
        <div className="btn-groupe">
          <Fade bottom>
        <div>
      {(btnleft) && <button className="btn btn-items-left" >{btnleft}</button>  }  
      {(btnright) &&  <button className="btn btn-items-right" >{btnright}</button>  } 
      </div> 
      </Fade>
         <img src={svg}  className="down-icon"/>
        </div>
        </div>
  
        </SectionBox>
        
      )
}



export default Box;



