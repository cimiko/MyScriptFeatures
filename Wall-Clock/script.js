const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');


const setDate = () => {
    const now = new Date();
    
    const minuteDegrees = ((now.getMinutes() / 60) * 360) + 180;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    
    const hourDegrees = ((now.getHours()/12) * 360) + 180;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const secondDegrees = ((now.getSeconds() / 60) * 360) + 180;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    setInterval(setDate, 1000);
}
setDate()