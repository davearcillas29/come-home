export function initTimestamp() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = `${hours}:${minutes} ${ampm}`;

    const timeElement = document.getElementById('message-timestamp');
    if (timeElement){
        timeElement.textContent = timeString;
    }
}