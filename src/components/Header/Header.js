import React , {useRef , useState} from 'react'
import {Navigation  , Models  , Compte , NavToggle} from './styles'
import { FaTimes ,  FaAlignRight   } from "react-icons/fa";
import logo from '../assets/logo.svg'
import {useSelector} from "react-redux"


 const  Header =()  =>{
  const {carState} = useSelector(state => state)
   const [Show , setShow] = useState(false)
   const menuOpen =  useRef(null);

   const handler = ()=> {
      setShow(!Show)
   }

  return (
    <Navigation>
    <img src={logo} href="#model_S"/>
    <Models>
    {
    carState && carState.map((car, index) => {
      const {url , name} = car
      return (<a key={index} href={url}  >{name}</a>)
    })}
  
    </Models>
 
    <Compte>
    <a href="#" >shop</a>
    <a href="#"  > Tesla count</a>
    <FaAlignRight    className='icon' onClick={()=>handler()}  />
    </Compte>
    

    <NavToggle href={menuOpen} open={Show}>
    <FaTimes className='icon' onClick={()=>handler()}/>
     <ul>
     {
    carState && carState.map((car, index) => {
      const {url , name} = car
      return (<li  key={index} ><a href={url}  >{name}</a> </li>)
    })}
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

