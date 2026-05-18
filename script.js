let spriteIndex = 1;
const sprite = document.getElementById('sprite');

function isNight() {
    const hour = new Date().getHours();
    return hour < 6 || hour >= 18;
}

function getSpritePrefix() {
    return isNight() ? 'spriteNight' : 'spriteDay';
}

function updateSpriteSrc() {
    sprite.src = `assets/${getSpritePrefix()}_${spriteIndex}.png`;
}

sprite.addEventListener('click', () => {
    spriteIndex = (spriteIndex % 3) + 1;
    updateSpriteSrc();

    sprite.classList.remove('bounce');
    void sprite.offsetWidth;
    sprite.classList.add('bounce');
});

function updateCalendarandTime() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY",
        "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const month = monthNames[now.getMonth()];

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    document.getElementById('date').textContent = `${month} ${day}`;
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Day = 6 AM to 6 PM, Night = otherwise
    if (isNight()) {
        document.body.classList.add('night');
    } else {
        document.body.classList.remove('night');
    }

    updateSpriteSrc();
}

function scaleCalendar() {
    const calendar = document.getElementById('calendar');
    const availW = window.innerWidth - 40;
    const availH = window.innerHeight - 40;
    const scale = Math.min(1, availW / 330, availH / 330);
    calendar.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', scaleCalendar);
scaleCalendar();

updateCalendarandTime();
setInterval(updateCalendarandTime, 1000);
