function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") {
    alert("Please write something!");
    return;
  }

  let list = document.getElementById("taskList");

  let li = document.createElement("li");
  li.textContent = task;

  li.onclick = function () {
    list.removeChild(li);
  };

  list.appendChild(li);
  input.value = "";
}