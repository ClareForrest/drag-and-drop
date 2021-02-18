import './App.css';

function App() {
  let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);
  return (
    <div> 
      <h1>Get the Fire Fighter Ready!</h1>
      <div>
        <div id="helmet-draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
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


      <main class="drop-zone">
        <card class="dropzone">helmet goes here</card>  
        <card class="dropzone">jacket goes here</card> 
        <card class="dropzone">pants go here</card>  
        <card class="dropzone">boots goes here</card>   
      </main>
    </div>
  );
}

export default App;
