import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HomePage from "./pages/HomePage";
import ContactProfile from "./pages/ContactProfile";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditContactPage";
import MobileAddButton from "./components/MobileAddButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<ContactProfile />} />
        <Route path="/add" element={<AddContactPage />} />
        <Route path="/edit/:id" element={<EditContactPage />} />
      </Routes>
      <div className="flex sm:hidden  ">
        <MobileAddButton />
      </div>
    </div>
  );
}

export default App;
