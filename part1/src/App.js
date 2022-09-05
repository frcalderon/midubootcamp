import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>
    Esta es la APP del curso fullstack bootcamp
  </p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='blue' message='En un curso' />
      <Mensaje color='green' message='De React' />
      <Description />
    </div>
  );
}

export default App;
