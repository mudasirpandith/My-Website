import React from "react";
export default function About() {
  return (
    <>
      <div className="about-box">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          praesentium, iste nemo voluptatibus tenetur a vitae libero aspernatur
          repudiandae, incidunt quo asperiores dignissimos. Placeat libero,
          neque iste facere ducimus illo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim reprehenderit neque eaque, tempore voluptates
          voluptatibus nisi delectus natus debitis corporis officia impedit
          ducimus! Placeat aut maiores officiis dicta suscipit quia?
        </p>
        <footer>
          <center>
            <p>
              Developed by Mudasir Ahmad Pandith @{new Date().getFullYear()}
            </p>
          </center>
        </footer>
      </div>
    </>
  );
}
