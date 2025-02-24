let data = '강내연,김나경,김도연,김민규,한종석,구승회,박시현,송명보,이원규,이종현,정지원,조지영';
let users = data.split(',');

const userList = document.getElementById("user-list");
const selectedList = document.getElementById("selected-list");
const input = document.getElementById("username");
const addBtn = document.getElementById("btn-add");
const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");

let interval;
let currentIndex = 0;
let speed = 100;
let running = false;

function renderUserList() {
  userList.innerHTML = "";
  users.forEach(name => {
    let li = document.createElement("li");
    li.textContent = name;
    li.classList.add("item");
    userList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  let name = input.value.trim();
  if (name) {
    users.push(name);
    renderUserList();
    input.value = "";
  }
});

function startSelection() {
  if (running || users.length === 0) return;
  running = true;
  speed = 100;

  function iterate() {
    if (!running) return;

    let items = document.querySelectorAll("#user-list .item");
    if (items.length === 0) return;

    items.forEach(item => item.classList.remove("on"));

    items[currentIndex].classList.add("on");

    currentIndex = (currentIndex + 1) % items.length;

    if (speed < 500) {
      speed += 30;
      interval = setTimeout(iterate, speed);
    }
  }
  iterate();
}

function stopSelection() {
  running = false;
  clearTimeout(interval);

  let selected = document.querySelector("#user-list .on");
  if (selected) {
    selected.classList.remove("on");
    selected.classList.add("fix");
    selectedList.appendChild(selected);
    users = users.filter(name => name !== selected.textContent);
    renderUserList();
  }
}

startBtn.addEventListener("click", startSelection);
stopBtn.addEventListener("click", stopSelection);

renderUserList();
