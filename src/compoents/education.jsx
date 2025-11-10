import "./styles/education.css"
import { useEffect, useState } from "react";
import "./styles/education.css";

export function Education() {
  const educationData = [
    {
      title: "Bachelor of Computer Science",
      place: "Shanmuganathan Engineering College.Arassampatti ",
      cgpa:" CGPA-8.0",
      year: "Year-2021-2025",
      
    },
    {
      title: "HSC(12th)",
      place: "ullagappar higher secondary school,kadiyappati",
      percentage:"Percentage-80.7%",
      year: "Year-2020 – 2021",
    },
    {
      title: "SSLC(10th)",
      place: "ullagappar higher secondary school,kadiyappati",
      percentage:"Percentage-70.8%",
      year: "Year-2018-2019",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % educationData.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(timer);
  }, [educationData.length]);

  const current = educationData[index];

  return (
    <div className="education-section text-center">
      <h1 className="education-title">Education</h1>
      <div className="education-box fade-box">
        <h3>{current.title}</h3>
        <p>{current.place}</p>
        <span>{current.cgpa}</span>
        <span>{current.percentage}</span><br></br>
        <span>{current.year}</span>
      </div>
    </div>
  );
}


