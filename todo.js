import fs from 'node:fs';


function id(todos) {
    if (todos.length === 0) return 1;
    return todos[todos.length - 1].id + 1;
}