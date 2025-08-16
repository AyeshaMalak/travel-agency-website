import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-transparent text-black px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">TravelMate</h1>
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}