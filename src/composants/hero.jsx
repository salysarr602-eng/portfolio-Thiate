import saly from "../assets/img.jpg"

function Hero() {
  return (
    <div className="hero">
      <div className="box_hero">
        <div className="hero_gauche">
          <h1>Bonjour,</h1>
          <h2>je suis Saly Tening Sarr</h2>
          <p>
            Je suis développeuse fullstack, passionnée par l'informatique
            et les nouvelles technologies. J'aime apprendre et développer
            mes compétences chaque jour.
          </p>
        </div>
        <div className="hero_droite">
          <img src={saly} alt="Thiate" />
        </div>
      </div>
    </div>
  );
}

export default Hero;