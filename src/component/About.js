import "./About.css";

const About = () => {
  const teamMembers = [
    { id: 1, name: "Yeshwanth", photo: "team/Yeshwanth1.jpg" },
    { id: 2, name: "Lalith", photo: "team/Lalith1.jpg" },
    { id: 3, name: "Rahul", photo: "team/Rahul1.jpg" },
    { id: 4, name: "Akshita", photo: "team/Akshita1.jpg" },
    { id: 5, name: "Sudhamsh", photo: "team/Sudhamsh1.jpg" },
    { id: 6, name: "Suhani", photo: "team/Suhani1.jpg" },
  ];

  return (
    <div className="about-container">
      <div className="image-container">
        <img
          src="/images/bade.jpg"
          alt="Background"
          className="background-img"
        />
      </div>

      <div className="content-wrapper">
        <div className="about-section">
          <h2 className="section-title">Our Vision</h2>
          <div className="about-text">
            <p>
              Our journey began with a vision to make knowledge about children's
              rights accessible and enjoyable for young minds. The initiative is
              a response to the recognized need for early understanding of
              children's rights. We are committed to breaking down barriers and
              creating a platform that transcends socio-economic constraints.
            </p>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">Meet the Team</h2>
          <div className="about-text">
            <p>
              Behind this transformative platform is a dedicated team of
              HexaHeroes. Our diverse skills converge to craft an innovative
              space where learning about Child Rights becomes an exciting
              adventure. Together, we strive to redefine how awareness about
              Child Rights is imparted, paving the way for a more informed and
              empowered future.
            </p>
          </div>

          <div className="team-container">
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="member-photo-container">
                    <img
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                      className="team-photo"
                    />
                  </div>
                  <p className="team-name">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
