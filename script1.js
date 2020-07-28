const addToDo = document.querySelector('.add');

const list = document.querySelector('.todos');

const search = document.querySelector('.search input');

const generateTodo = todo => {
    
    const html = `
     <li class="list-group-item d-flex justify-content-between align-items-center">
       <span>${todo}</span>
       <i class="fa fa-trash-o delete"></i>
     </li>`;

    list.innerHTML += html;

};

addToDo.addEventListener('submit', event => {
    
    // Prevents reload
    event.preventDefault();
    

    const todo = addToDo.add.value.trim();

    if (todo.length) {
        generateTodo(todo);
        addToDo.reset();

    }

});


// delete ToDos

list.addEventListener('click', event => {
    if (event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
});


const filterTodos = (term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});