import { Link } from "react-router-dom"
import { useState } from 'react';


export default function Nav(){
    const [isOpen, setIsOpen] = useState(true);



    return (
        <>

            <nav>
                <Link to="/" className="nav-item">HOME</Link>
                <Link to="/about" className="nav-item">ABOUT</Link>
                <Link to="/menu" className="nav-item">MENU</Link>
                <Link to="/booking" className="nav-item">RESERVATIONS</Link>
                <Link to="/contact" className="nav-item">CONTACT</Link>
                <Link to="/login" className="nav-item">LOGIN</Link>
            </nav>
        </>
    )
}