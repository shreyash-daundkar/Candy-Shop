import "./Header.css"
import CartNavigation from "./CartNavigation";

function Header() {
    return (
        <header class="header">
            <h1>EAT IT</h1>
            <CartNavigation />
        </header>
    );
}

export default Header;