import koala from './assets/Koala.jpeg'
function Card()
{
    return(
        <>
            <div className = "card">
                <img className = "card-image" src = {koala} ></img>
                <h2 className = "card-title">Thrish</h2>
                <p>Heyo! Just a learner.</p>
            </div>
            <div className = "card">
                <img className = "card-image" src = {koala} ></img>
                <h2 className = "card-title">Thrish</h2>
                <p>Heyo! Just a learner.</p>
            </div>
            <div className = "card">
                <img className = "card-image" src = {koala} ></img>
                <h2 className = "card-title">Thrish</h2>
                <p>Heyo! Just a learner.</p>
            </div>
        </>
    );
}

export default Card