const toDoItems = [];

function displayItems() {
    const toDoList = document.getElementById('todo-list');

    toDoItems.sort((a, b) => a.prio - b.prio);

    toDoList.querySelectorAll('li').forEach(element => {
        element.remove();
    });

    //same one-line:
    //forEach(li => li.remove());

    for (itemIndex in toDoItems) {
        const newItem = document.createElement('li');
        newItem.innerText = toDoItems[itemIndex].text;

        const dateAsText = document.createElement('p');
        dateAsText.setAttribute('class', 'date');
        dateAsText.innerText = toDoItems[itemIndex].date;

        const priorityAsText = document.createElement('p');
        priorityAsText.setAttribute('class', 'priority');
        priorityAsText.innerText = toDoItems[itemIndex].prio;

        newItem.classList.add('priority-item-' + toDoItems[itemIndex].prio);

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete-button');
        deleteButton.innerText = '🗑️';

        deleteButton.addEventListener('click', () => {
            deleteItem(itemIndex);
        });


        newItem.appendChild(priorityAsText);
        newItem.appendChild(dateAsText);
        newItem.appendChild(deleteButton);
        toDoList.appendChild(newItem);
    }
    console.log(toDoItems);
}


function addItem(priority, itemText, dueDate) {
    toDoItems.push({ prio : priority, text: itemText, date : dueDate });
    displayItems();
}

function deleteItem(index) {
    toDoItems.splice(index, 1);
    displayItems();
}


window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const toDoListInput = document.getElementById('todo-text-input');
    const toDoListDueDateInput = document.getElementById('dueDate');
    const toDoListPriority = document.getElementById('priority');

    form.addEventListener('submit', event => {
        event.preventDefault();
        addItem(toDoListPriority.value, toDoListInput.value, toDoListDueDateInput.value);
        toDoListInput.value = '';
    });

});