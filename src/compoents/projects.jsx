import "./styles/project.css";
import travelImg from "../assets/travel.jpg";
import youtubeImg from "../assets/youtube.jpg";
import foodImg from "../assets/food.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import moodImg from "../assets/mood.jpg";
import muniImg from "../assets/municipality.jpg";
import atmImg from "../assets/atm.jpg";

export function Projects() {
  const projects = [
    {
      title: "Travel Guide Website",
      desc: "A responsive travel guide website built with HTML and CSS to explore destinations and travel tips.",
      img: travelImg,
      tech: "HTML, CSS",
    },
    {
      title: "YouTube Clone",
      desc: "A simple YouTube-style web page using HTML and CSS, designed to display video layouts and thumbnails.",
      img: youtubeImg,
      tech: "HTML, CSS",
    },
    {
      title: "Food Delivery Website",
      desc: "A front-end food delivery app design using HTML, CSS, and JavaScript for menu display and order interaction.",
      img: foodImg,
      tech: "HTML, CSS, JavaScript",
    },
     {
      title: "Portfolio Website",
      desc: "A responsive personal portfolio built using React and CSS animations.",
      img: portfolioImg,
      tech:"Html,css,javascript,React"
    },
     {
      title: "Mood Tracker App",
      desc: "A Django-based web app that records moods and displays daily data on a chart.",
      img: moodImg,
      tech:"html,css,javascript,django,python"
    },

    {
      title: "Municipality Complaint System",
      desc: "A Django-based full-stack web app for managing complaints, worker tasks, and municipal responses.",
      img: muniImg,
      tech: "Python, Django, HTML, CSS",
    },
     {
      title: "ATM Machine Simulation",
      desc: "A Python project that simulates ATM transactions with authentication and balance tracking.",
      img: atmImg,
      tech:"python"
    },
  ];

  return (
    <div className="projects-section text-center">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-box glass"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <img src={p.img} alt={p.title} className="project-img" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="tech">{p.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
