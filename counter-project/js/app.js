const low = document.getElementById("low");
const add = document.getElementById("add");
const counter = document.getElementById("counter");
let count = 0;

add.onclick = () => {
  count = count + 1;
  document.getElementById("counter").innerHTML = count;
  console.log(count);
  if (count == 0) {
    counter.style.color = "gray";
  } else if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  }
};

low.onclick = () => {
  count = count - 1;
  document.getElementById("counter").innerHTML = count;
  console.log(count);
  if (count == 0) {
    counter.style.color = "gray";
  } else if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  }
};
