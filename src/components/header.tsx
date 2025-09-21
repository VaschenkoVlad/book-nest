import { Link } from "react-router-dom";
import "../index.css"


export default function Header() {
    return (
        <>
        <header className="header">
            <div>
               <img src="/img/group-1.png" alt="logo" />
               <p>Book Haven</p>
            </div>
            <nav>
                <ul className="nav-ul">
                <li className="nav-li"><Link to="/">Home Page</Link></li>
                <li className="nav-li"><Link to="/books">Books Page</Link></li>
                <li className="nav-li"><Link to="/book">Book Page</Link></li>
                </ul>
            </nav>
            <div>
                <button>Sign in</button>
                <button>Join us</button>
            </div>
        </header>
        </>
    )
}

export { Header };