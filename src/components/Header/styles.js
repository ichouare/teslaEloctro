import styled from 'styled-components'

export const Navigation = styled.header`
background-color: #FFF;
width:100vw;
height: 50px;
position: fixed;
top:0;
left:0;
right: 0;
display:flex;
justify-content: space-between;
align-items: center;
padding: 0px 40px;
z-index: 99;
box-shadow: 0px 0px 20px 0px rgba(128,128,128,0.36) ;


@media (max-width:768px) {
    justify-content: space-between;
    padding: 0  30px; 
  }
`

export  const Models = styled.nav`
width:500px;
height: 100%;
display:flex;
justify-content:space-between;
align-items:center;
text-align:center;
margin-left:120px;


a{
     font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      line-height: 1.5px;
      color:#181818;
      font-weight: 500;
      letter-spacing: 0.25rem;
  }
  
    @media (max-width:1024px) {
      display: none;   
  }
` 
export const  Compte = styled.nav`
width:200px;
display:flex;
justify-content:space-around;
align-items:center;
a{
     font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      color:#181818;
      font-weight: 500;
      letter-spacing: 0.25rem;
  }
.icon{
  cursor: pointer;
}

`

export const NavToggle = styled.aside`
background-color:#FFF;
padding: 20px 60px;
position:absolute;
top:0;
bottom: 0;
right: 0;
width: 400px;
height:100vh;
display: flex;
flex-direction: column;
align-items: flex-start;
transition: 0.3s linear;
transform: ${props => props.open ?' translateX(0%)' : 'translateX(100%)' };
.icon{
  width: 25px;
  height:25px;
  align-self: flex-end;
  cursor: pointer;
}
ul{
  list-style: none;
  width: 100%;
  height: 80% ;
  display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
margin-top: 20px;
}
ul li a{
     font-size: 16px;
      text-decoration: none;
      text-transform: capitalize;
      color:#181818;
      font-weight: 500;
      letter-spacing: 0.1rem;
  }`