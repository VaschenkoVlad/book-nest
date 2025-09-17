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
                    <li className="nav-li"><a href="/">Home Page</a></li>
                    <li className="nav-li"><a href="/">Books Page</a></li>
                    <li className="nav-li"><a href="/">Book Page</a></li>
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