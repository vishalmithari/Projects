
const timer = document.getElementById("timer");
const olympicDate = new Date("July 26, 2028 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = olympicDate - now;

    if (diff <= 0) {
        timer.textContent = "🏅 The Olympics Have Started!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.textContent = 
        `${days}:days ${hours}:hours ${minutes}:min ${seconds}:sec`;
}, 1000);
