import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>NEWSOPEDIA</h3>
          <p> 
          This React app displays Indian news headlines fetched from the Newsdata.io API using axios. It features
          a NewsHeadlines component that manages state and displays headlines in a styled list. Clicking a
          headline shows full article details in a modal. Environment variables securely handle the API key.</p>
          <a href="https://suprith-newsopedia.netlify.app" target="_blank" rel="noopener noreferrer">view</a> 
        </div>
        <div className="project">
          <h3>TIC-TAC-TOE</h3>
          <p>
            Skeleton of the game is build using the HTML file, showing players turn and a reset button. For
            designing the game I have used CSS on how the game board looks and fonts. Coming for the main
            component and how the game works I have used JavaScript, When a user wins or the game is drawn.</p>
            <a href="https://suprith-tictactoe.netlify.app" target="_blank" rel="noopener noreferrer">view</a> 
        </div>
        <div className="project">
          <h3>WEATHER-APP</h3>
          <p>
          The app uses API to retrieve weather data from a specific location entered. React makes HTTP request
          to API, providing the location. React uses state to store the fetched weather data. This allows the app to
          update the UI dynamically when new data arrives each time when entered.<a href="https://suprith-weather-app.netlify.app" target="_blank" rel="noopener noreferrer">view</a> </p>
          
        </div>
        <div className="project">
          <h3>TO-DO-LIST</h3>
          <p>
            In this project, users can add To-do work in the list and when the work is completed the user can delete
            the assigned task. I have added fonts and icons to make the app look minimal and user friendly.</p>
            <a href="https://suprith-todolist.netlify.app" target="_blank" rel="noopener noreferrer">view</a> 
        </div>
      </div>
    </section>
  );
};

export default Projects;
