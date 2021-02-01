newFunction();
function newFunction() {
  let time = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  let hours = time.getHours();

  let minutes = time.getMinutes();

  minutes < 10 ? minutes = `0${minutes}` : minutes
  hours < 10 ? hours = `0${hours}` : hours
  const clock = document.querySelector(".time");
  clock.innerHTML = `time : '<a>${hours}:${minutes}</a>',`;
}




setInterval(newFunction, 1000)
