export function initReadings(){
    const dateElement = document.getElementById("readings-date");
    if (dateElement){
        const today = new Date();

        const formattedDate = today.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
        });

        dateElement.textContent = formattedDate;

    }
}