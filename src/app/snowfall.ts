document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.querySelector(".snow");

  // Ensure that snowContainer is not null before proceeding
  if (snowContainer) {
    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowContainer.appendChild(snowflake);
      animateSnowflake(snowflake);
    }

    function animateSnowflake(snowflake: HTMLDivElement) {
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize animation duration
      snowflake.addEventListener("animationiteration", () => {
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize animation duration
      });
    }

    function startSnowfall() {
      setInterval(createSnowflake, 500); // Create a new snowflake every 500 milliseconds
    }

    startSnowfall();
  } else {
    console.error("Snow container not found");
  }
});
