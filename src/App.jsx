import './App.css';
import { drag } from './components/dragFunction';
import firefighter_hat from './images/firefighter_hat.jpg'
import firefighter_pants from './images/firefighter_pants.png'
import firefighter_boots from './images/firefighter_boots.jpg'
import firefighter_jacket from './images/firefighter_jacket.png'

function App() {
  drag()
  return (  
    <>
    <h1>Get the Fire Fighter Ready!</h1>
    <div className="align-right"> 
      <img src={firefighter_hat} alt="hat" height="180px" width="auto"/>
      <img src={firefighter_pants} alt="pants" height="180px" width="auto" object-fit="contain"/>
      <img src={firefighter_boots} alt="boots" height="50px" width="auto"/>
      <img src={firefighter_jacket} alt="jacket" height="180px" width="auto"/>
    </div>

      <main className="firefighter">
        <card className="dropzone"></card>  
        <card className="headspace"></card>
        <card className="dropzone"></card> 
        <card className="dropzone"></card>  
        <card className="dropzone"></card>   
      </main>
    </>
  );
}

export default App;
