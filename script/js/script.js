document.addEventListener('contextmenu', event => event.preventDefault());

  function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';

      const size = Math.random() * 4 + 2;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;

      const left = Math.random() * 100;
      const startingY = Math.random() * window.innerHeight;
      snowflake.style.left = `${left}%`;
      snowflake.style.top = `${startingY}px`;

      const opacity = Math.random() * 0.7 + 0.3;
      snowflake.style.opacity = opacity;

      const duration = Math.random() * 10 + 5;
      snowflake.style.animationDuration = `${duration}s`;

      snowflake.style.animationDelay = '0s';

      snowflakesContainer.appendChild(snowflake);
    }
  }

  const windowElement = document.getElementById('draggable-window');
  let isDragging = false;
  let offsetX, offsetY;

  windowElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    offsetY = e.clientY - windowElement.getBoundingClientRect().top;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      windowElement.style.left = `${e.clientX - offsetX}px`;
      windowElement.style.top = `${e.clientY - offsetY}px`;
      windowElement.style.position = 'absolute';
    }
  });

  window.addEventListener('load', createSnowflakes);
