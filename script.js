document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Agregar una nueva tarea
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");

        // Crear el contenido de la tarea
        const span = document.createElement("span");
        span.textContent = taskText;

        // Botón de completar
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.classList.add("complete");
        completeBtn.addEventListener("click", () => {
            span.classList.toggle("completed");
        });

        // Botón de editar
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏";
        editBtn.classList.add("edit");
        editBtn.addEventListener("click", () => {
            const newTaskText = prompt("Editar tarea:", span.textContent);
            if (newTaskText !== null) {
                span.textContent = newTaskText;
            }
        });

        // Botón de eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        // Contenedor de botones
        const actions = document.createElement("div");
        actions.classList.add("actions");
        actions.appendChild(completeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);
        taskList.appendChild(li);

        taskInput.value = "";
    }

    addTaskBtn.addEventListener("click", addTask);

    // Permitir añadir tareas con "Enter"
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});