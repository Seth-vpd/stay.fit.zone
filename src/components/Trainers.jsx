import { trainers } from '../data/content';
import './Trainers.css';

const Trainers = () => {
  return (
    <section id="trainers" className="trainers">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            MEET OUR <span className="accent">TRAINERS</span>
          </h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Hear from our members about their transformation journey
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-image">
                <div className="trainer-image-placeholder">
                  <span className="trainer-icon">👤</span>
                </div>
                <div className="trainer-overlay"></div>
              </div>
              <div className="trainer-content">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-role">{trainer.role}</p>
                <div className="trainer-specialties">
                  {trainer.specialties.map((specialty, index) => (
                    <span key={index} className="specialty-badge">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
