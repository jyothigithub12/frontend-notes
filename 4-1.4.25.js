var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.createTask = function (task) {
        this.tasks.push(task);
    };
    TodoList.prototype.getAllTasks = function () {
        var str = 'Task List \n';
        this.tasks.forEach(function (task) {
            str +=
                "\n                Id: ".concat(task.id, "\n                Title: ").concat(task.title, "\n                Description: ").concat(task.description, "\n                Status: ").concat(task.status, "\n                Priority: ").concat(task.priority, "\n                Created At: ").concat(task.createdAt, "\n            ");
        });
        console.log(str);
    };
    return TodoList;
}());
var todoList = new TodoList();
todoList.createTask({
    id: 'task-001',
    title: 'Design homepage layout',
    description: 'Create the wireframe and initial design for the new homepage.',
    status: 'in-progress',
    dueDate: new Date('2025-04-10').toISOString(),
    createdAt: new Date('2025-04-01').toISOString(),
    updatedAt: new Date('2025-04-03').toISOString(),
    assignedTo: 'user-123',
});
todoList.createTask({
    id: 'task-002',
    title: 'Design homepage layout',
    description: 'Create the wireframe and initial design for the new homepage.',
    status: 'in-progress',
    dueDate: new Date('2025-04-10').toISOString(),
    createdAt: new Date('2025-04-01').toISOString(),
    updatedAt: new Date('2025-04-03').toISOString(),
    assignedTo: 'user-123',
});
todoList.getAllTasks();
