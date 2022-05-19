import React , {useRef , useState} from 'react'
import {Navigation  , Models  , Compte , NavToggle} from './styles'
import { FaTimes ,  FaAlignRight   } from "react-icons/fa";
import logo from '../assets/logo.svg'


 const  Header =()  =>{
   const [Show , setShow] = useState(false)
   const menuOpen =  useRef(null);

   const handler = ()=> {
      setShow(!Show)
   }

  return (
    <Navigation>
    <img src={logo} />
    <Models>
    <a href="#" >model S</a>
    <a href="#" >model 3</a>
    <a href="#model_Y" >model Y</a>
    <a href="#" >model X</a>
    </Models>
 
    <Compte>
    <a href="#" >shop</a>
    <a href="#"  > Tesla count</a>
    <FaAlignRight    className='icon' onClick={()=>handler()}  />
    </Compte>
    

    <NavToggle ref={menuOpen} open={Show}>
    <FaTimes className='icon' onClick={()=>handler()}/>
     <ul>
    <li><a href="#">existing inventor</a></li>
    <li><a href="#">used inventor</a></li>
    <li><a href="#">trade-in</a></li>
    <li><a href="#">test drive</a></li>
    <li><a href="#">cybertruck</a></li>
    <li><a href="#">roadster</a></li>
    <li><a href="#">semi</a></li>
    <li><a href="#">charging</a></li>
    <li><a href="#">powerwall</a></li>
    <li><a href="#">commercial energy</a></li>
    <li><a href="#">Find us</a></li>
    <li><a href="#">support</a></li>
    <li><a href="#">investor Relations</a></li>
    </ul>
    </NavToggle>
   
    </Navigation>
  )
}


export default Header;

