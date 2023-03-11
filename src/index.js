document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleForm(e.target.new_task_description.value);
  });
});

function handleForm(data) {
  let app = document.querySelector("#list > #tasks");

  let newItem = document.createElement("li");

  app.appendChild(newItem);
  newItem.textContent = data;
  let newItemDelete = document.createElement("button");

  newItem.appendChild(newItemDelete);

  newItemDelete.textContent = "x";

  newItemDelete.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
}
