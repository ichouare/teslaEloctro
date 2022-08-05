
import './App.css';
import Box from './components/Boxx/Box'
import Model_Y from '../src/components/assets/model-y.jpg'
import Model_3 from '../src/components/assets/model-3.jpg'
import Model_s from '../src/components/assets/model-s.jpg'
import Model_x from '../src/components/assets/model-x.jpg'
import Solar_Roof from '../src/components/assets/solar-roof.jpg'
import Solar from '../src/components/assets/solar-panel.jpg'
import Accessories from '../src/components/assets/accessories.jpg'
import  Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
    <Header />
     <Box   id='model_S'
            title='model S' 
            discription='order Online for touchless delivery'
            btnleft="custumer order"
            btnright="exesting inventory"
            backgroundImg={Model_s}
/>
 <Box      id='model_Y'
            title='model Y' 
            discription='order Online for touchless delivery'
            btnleft="custumer order"
            btnright="exesting inventory"
            backgroundImg={Model_Y}/>
   <Box     id='model_3'
            title='model 3' 
            discription='order Online for touchless delivery'
            btnleft="custumer order"
            btnright="exesting inventory"
            backgroundImg={Model_3} />
   <Box     id='model_X'
            title='model x' 
            discription='order Online for touchless delivery'
            btnleft="custumer order"
            btnright="exesting inventory"
            backgroundImg={Model_x} />
      <Box  id='Solar_Panels'
            title='Solar Panels' 
            discription='Lowest Cost Solar Panels in America'
            btnleft="custumer order"
            btnright="exesting inventory"
            backgroundImg={Solar} />
      <Box  id="Solar_Roof"
            title='Solar Roof' 
            discription='Produce Clean Energy From Your Roof'
            btnleft="custumer order"
            btnright="exesting inventory"
            backgroundImg={Solar_Roof} />
      <Box  id='Accessories'
            title='Accessories' 
            discription=''
            btnleft="custumer order"
            backgroundImg={Accessories} />
      
            </div>
  );
}

export default App;
