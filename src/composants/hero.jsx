import saly from "../assets/img.jpg"

function hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="left">
          <h1>
            Bonjour,<br />
            je suis <span>Saly Tening Sarr</span>
          </h1>
          <p>
            Je suis développeuse fullstack, passionnée par l'informatique
            et les nouvelles technologies. J'aime apprendre et développer
            mes compétences chaque jour.
          </p>
        </div>
                 <div className="right">
          <img src={saly} alt="Thiate" />
        </div>
      </div>
    </div>
  );
}

export default hero;
