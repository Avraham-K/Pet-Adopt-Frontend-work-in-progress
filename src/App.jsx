import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarFunc from "./components/Navbarfunc/Navbarfunc";
import Homepage from "./pages/Homepage/Homepage";
import UserContextProvider from "./components/UserContextProvider";
import PetCarousel from "./pages/PetCarousel/PetCarousel";
import ProfileSettings from "./pages/ProfileSettings/ProfileSettings";
import MyPets from "./pages/MyPets/MyPets";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <NavbarFunc />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/PetCarousel" element={<PetCarousel />}/>
        <Route path="/ProfileSettings" element={<ProfileSettings />}/>
        <Route path="/MyPets" element={<MyPets />}/>
      </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
