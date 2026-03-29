import { programs } from '../data/content';
import './Programs.css';

const Programs = () => {
  return (
    <section id="programs" className="programs">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            OUR <span className="accent">PROGRAMS</span>
          </h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Diverse training programs designed for every fitness level and goal
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <div className="program-image">
                <div className="program-image-placeholder">
                  <span className="program-icon">💪</span>
                </div>
                <div className="program-overlay">
                  <button className="btn btn-primary">LEARN MORE</button>
                </div>
              </div>
              <div className="program-content">
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <ul className="program-features">
                  {program.features.map((feature, index) => (
                    <li key={index}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
