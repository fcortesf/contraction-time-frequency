let lastClickTime;
const history = [];

function getTimeString(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  
  return `${hours}:${minutes}:${seconds}`;
}

function onButtonClick() {
  const now = new Date();

  const timeDifference = lastClickTime
    ? ((now - lastClickTime) / 1000 / 60).toFixed(2)
    : "N/A";
  
  const formattedText =  getTimeString(now) + " (difference: " + timeDifference + " minutes) \n";
  document.getElementById("timeDisplay").innerText = formattedText + document.getElementById("timeDisplay").innerText;

  lastClickTime = now;
}
