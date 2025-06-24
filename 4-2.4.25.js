var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// here interface is not used for the class TodoList. Instead, we are using abstract class.
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
var ExtendedTodoList = /** @class */ (function (_super) {
    __extends(ExtendedTodoList, _super);
    function ExtendedTodoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedTodoList.prototype.updateTask = function (id, task) {
        var index = this.tasks.findIndex(function (task) { return task.id === id; });
        this.tasks.splice(index, 1, task);
        console.log('Updated task successfully');
    };
    ExtendedTodoList.prototype.deleteTask = function (id) {
    };
    return ExtendedTodoList;
}(TodoList));
var todoList = new ExtendedTodoList();
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
    status: 'done',
    dueDate: new Date('2025-04-10').toISOString(),
    createdAt: new Date('2025-04-01').toISOString(),
    updatedAt: new Date('2025-04-03').toISOString(),
    assignedTo: 'user-123',
});
todoList.updateTask('task-002', {
    id: 'task-002',
    title: 'Design homepage layout',
    description: 'Create the wireframe and initial design for the new homepage.',
    status: 'done',
    dueDate: new Date('2025-04-10').toISOString(),
    createdAt: new Date('2025-04-01').toISOString(),
    updatedAt: new Date('2025-04-03').toISOString(),
    assignedTo: 'user-123',
});
todoList.getAllTasks();
