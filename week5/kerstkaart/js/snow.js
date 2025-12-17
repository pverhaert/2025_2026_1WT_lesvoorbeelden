// new snowflake every 50ms
const TIMER = 50;
// Min and max size of snowflakes
const MIN_SIZE = 4;
const MAX_SIZE = 12;
// Min and max duration of snowflakes
const MIN_DURATION = 2;
const MAX_DURATION = 5;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Random starting position (0% ... 100%)
    snowflake.style.left = Math.random() * 100 + '%';

    // Random size (MIN_SIZE ... MAX_SIZE)
    const size = Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE + 'px';
    snowflake.style.width = size;
    snowflake.style.height = size;

    // Random animation duration (2s ... 5s)
    const animationDuration = (Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION) + 's';
    snowflake.style.animation = `snowfall ${animationDuration} ease-out forwards`;

    document.body.appendChild(snowflake);

    // Remove snowflake after animation finished
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(animationDuration) * 1000 + 100);
}

// Create snowflakes periodically (every 10ms)
setInterval(createSnowflake, TIMER);