newFunction();
function newFunction() {
  let time = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  let hours = time.getHours();
  let minutes = time.getMinutes();
  const clock = document.querySelector(".time");
  clock.innerHTML = `time : '<a>${hours}:${minutes}</a>',`;
}

setInterval(newFunction, 1000)
