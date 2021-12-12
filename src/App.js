import InputField from './components/InputField/InputField'
import DetailsCard from './components/DetailsCard/DetailsCard'
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="main__background-banner"></div>
      <h1 className="main__title"> IP Adress Tracker </h1>
      <InputField />
      <DetailsCard />
    </div>
  );
}

export default App;
