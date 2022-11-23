import { useNavigate } from "react-router-dom";
import { goToHome, goToProfile, goToProduct } from "../Router/coordenato"

function Header () {

    const navigate = useNavigate()

    return (
        <header>
            <button onClick={() => goToHome(navigate)}>Ir para página inicial</button>
            <button onClick={() => goToProfile(navigate)}>Ir para perfíl</button>
            <button onClick={() => goToProduct(navigate, "1")}>Produto</button>
        </header>
    )
}

export default Header