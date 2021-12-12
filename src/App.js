import InputField from './components/InputField/InputField'
import DetailsCard from './components/DetailsCard/DetailsCard'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <div className="main">
      <div className="main__background-banner"> </div>
      <h1 className="main__title"> IP Adress Tracker </h1>
      <InputField />
      <DetailsCard />
      {/* <div className="map"> */}
        <MapContainer className="map" center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            {/* <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
          </Marker>
        </MapContainer>
    </div>
  );
}

export default App;
