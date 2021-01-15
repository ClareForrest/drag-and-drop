import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div> 
      <h1>Get the Fire Fighter Ready!</h1>
      <div class="dropzone">
        <div class="helmet-draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
          Draggable Helmet
        </div>
        <div class="jacket-draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
          Draggable Jacket
        </div>
        <div class="pants-draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
          Draggable Pants
        </div>
        <div class="boots-draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
          Draggable Boots
        </div>
      </div>


      <main class="page-set-up">
        <card class="helmet-dropzone">helmet goes here</card>  
        <card class="jacket-dropzone">jacket goes here</card> 
        <card class="pants-dropzone">pants go here</card>  
        <card class="boots-dropzone">boots goes here</card>   
      </main>
    </div>
  );
}

export default App;
