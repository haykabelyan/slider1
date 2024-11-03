import { NavLink as Link } from "react-router-dom"
import '../css/header.css';


export function Header() {
  return (
    <div className='header'>
      <div className='logo'> <span>T</span>ravel </div>
      <div className='navbar'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
      <div className="icons">
        <i className="fas fa-search"></i>
      </div>
    </div>
  )
}
