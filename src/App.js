import './App.css';
import InputField from './components/InputField/InputField'
import DetailsCard from './components/DetailsCard/DetailsCard'

function App() {
  return (
    <div className="main">
      <h1> IP Adress Tracker </h1>
      <InputField />
      <DetailsCard />
    </div>
  );
}

export default App;
