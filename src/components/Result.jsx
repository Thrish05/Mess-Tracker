import NavBar from './Navbar.jsx';
import './Result.css';

export default function Result() {

    return(
        <>
            <NavBar />
            <div className = "result-main">
                <div className = "result-center-div">
                    <p>Food of the Day!</p>
                    <div className = "winningFood">
                        <img src = './src/assets/Koala.jpeg' alt = "Most Voted Food item" />
                    </div>
                    <div className = 'foodDescription'>
                        <h1>~Food Name~</h1>
                    </div>
                </div>
            </div>
        </>
    )
                
}



