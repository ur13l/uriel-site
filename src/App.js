import image from "./assets/amplify.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={image} alt="logo" />
      <h1>Mi primer sitio en Amplify (dev)</h1>
      <p>Este es un nuevo texto que solo se mostrará en el entorno de Dev</p>
    </div>
  );
}

export default App;
