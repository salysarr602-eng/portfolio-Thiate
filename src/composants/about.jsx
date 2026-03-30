import saly from "../assets/about.jpg"

function About() {
  return (
    <div className="section">
      <h1 className="title">A propos de moi</h1>
      <div className="container">
        <div className="left">
          <img src={saly} alt="SalyDev" />
        </div>
        <div className="right">
          <div className="card">
            <h3>Développeuse Frontend</h3>
            <p>
              Je développe des interfaces modernes avec React, HTML et CSS.
              <br />
              <strong>Niveau : Intermédiaire</strong>
            </p>
          </div>
          <div className="card">
            <h3>Développeuse Backend</h3>
            <p>
              Je maîtrise les bases du backend avec Node.js et Express.
              <br />
              <strong>Niveau : Débutant à intermédiaire</strong>
            </p>
          </div>
          <div className="card">
            <h3>Passionnée par l'UI/UX</h3>
            <p>
              Je conçois des interfaces simples et attractives.
              <br />
              <strong>Niveau : Intermédiaire</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;