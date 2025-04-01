import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="absolute inset-0 bg-[url('public/wallpaperflare.com_wallpaper.jpg')] bg-cover bg-center">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
