function Header(){

    return(
    
        <header>
            <img className = "collegeLogo" src = "./src/assets/Images/CIT.jpg" alt = "Chennai Institute of Technology"/>
            <p>CIT's Dine Decider</p>
            <ul className = "navigate">
                    <li><a href = "#">Home</a></li>
                    <li><a href = "#">About Us</a></li>
                    <li><a href = "#">Contact</a></li>
            </ul>
            <button onClick = " ">Log Out</button>
        </header>
    )
}

export default Header;