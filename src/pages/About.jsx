import React from "react";

function About() {
  return (
    <div className="card glass bg-base-100 hover:bg-base-100 p-6">
      <h1 className="text-6xl font-semibold mb-4">AstroPic</h1>
      <p className="mb-4 text-2xl font-light">
        A React application to view the astronomy pic of the day by NASA using
        API provided by NASA.
      </p>
      <p>Developed by: Anmol Pattnayak</p>
      <p>Tech Stack used: React, Tailwind CSS and Daisy UI</p>
    </div>
  );
}

export default About;
