const btn = document.querySelector("#add-task");
const ul = document.querySelector("#todo-list");
const inp = document.querySelector("#todo");

function addTask() {
  const taskText = inp.value.trim();

  if (!taskText) {
    alert("Enter a todo to add it to the list.");
    inp.focus();
    return;
  }

  const item = document.createElement("li");
  item.className = "list-group-item";

  const taskContent = document.createElement("label");
  taskContent.className = "task-content";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input task-checkbox";

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.className = "btn btn-warning btn-sm edit-btn";
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn btn-danger btn-sm delete-btn";
  deleteBtn.textContent = "Delete";

  taskContent.append(checkbox, text);
  actions.append(editBtn, deleteBtn);
  item.append(taskContent, actions);
  ul.prepend(item);

  inp.value = "";
  inp.focus();
}

btn.addEventListener("click", addTask);

inp.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

ul.addEventListener("change", (event) => {
  if (event.target.matches(".task-checkbox")) {
    event.target
      .closest("li")
      .classList.toggle("completed", event.target.checked);
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.matches(".delete-btn")) {
    event.target.closest("li").remove();
    return;
  }

  if (event.target.matches(".edit-btn")) {
    const item = event.target.closest("li");
    const text = item.querySelector(".task-text");
    const currentText = text.textContent;
    const editInput = document.createElement("input");

    editInput.type = "text";
    editInput.className = "form-control form-control-sm edit-input";
    editInput.value = currentText;
    text.replaceWith(editInput);
    event.target.textContent = "Save";
    event.target.classList.replace("edit-btn", "save-btn");
    editInput.focus();
    editInput.select();
    return;
  }

  if (event.target.matches(".save-btn")) {
    const item = event.target.closest("li");
    const editInput = item.querySelector(".edit-input");
    const updatedText = editInput.value.trim();

    if (!updatedText) {
      alert("A todo cannot be empty.");
      editInput.focus();
      return;
    }

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = updatedText;
    editInput.replaceWith(text);
    event.target.textContent = "Edit";
    event.target.classList.replace("save-btn", "edit-btn");
  }
});
