import { useParams } from 'react-router-dom';
import logo from '../../assets/logo.png';

const COUNTRY_LABELS: Record<string, string> = {
  uk: "United Kingdom WOW Dashboard",
  aus: "Australia WOW Dashboard",
};

const Navbar = () => {

    const { country } = useParams();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center border-b h-16 border-gray-300">
      <img src={logo} alt="Logo" className="h-8 mr-4" />
      <h1 className="text-xl font-semibold">
        {" "}
        {COUNTRY_LABELS[country ?? "uk"] || "WOW Dashboard"}
      </h1>
    </nav>
  );
};

export default Navbar;
