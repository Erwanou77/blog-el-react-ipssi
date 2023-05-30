import logo from "../assets/images/tourCesar.jpeg"
const Navbar = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/#">Test</a></li>
            </ul>
        </header>
    );
};

export default Navbar;