
import './App.css';
import './style.css';
import img from "./image2.jpg"

function App() {
 
  return (
    <div className="App">
  <div style={{border:'solid 1px bloc', maxWidth:'100vw'}}>
  <h1 className='title red'>Nature is life</h1>
  <br ></br>
  <img src={img} alt ='myImage' />
  <br ></br>
  <img src="image1.jpg" alt="myimage" />
    </div>
    <iframe width={683} height={384} 
    src="https://www.youtube.com/embed/BHACKCNDMW8" 
    title="YouTube video player" 
    frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    );
    </div>
  );
}

export default App;
