import image1 from './img/spark.png'
import donate from './img/donate.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="head">
       <h3 className="abc">The Spark Foundation 🙂 </h3>
       <img src={image1} alt="image"/>
     </div>
     <div className="bar">
       <a href="https://www.thesparksfoundationsingapore.org/" target="_blank">Home</a>
       <a href="https://www.thesparksfoundationsingapore.org/join-us/why-join-us/" target="_blank">Join Us</a>
       <a href="https://www.thesparksfoundationsingapore.org/contact-us/" target="_blank">Contact Us</a>
       <a href="https://rzp.io/l/ooqHjM7" target="_blank">Donate</a>
     </div>
     <hr/>
     <div className="body">
       <img  className="donate"  src={donate} alt="donate image"></img>
       {/* <p class=" animated infinite heartBeat">"Let's come together to make this world better."</p> */}
     </div>

     <div className="footer">
       <span>Contact Me:</span><br/>
      Email: rajkamalshakya2000@gmail.com
      <br/>
      <span>Copyright SHAKYA @2021</span> 
     </div>
    </div>
  );
}

export default App;
