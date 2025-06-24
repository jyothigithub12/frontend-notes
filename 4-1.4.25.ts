interface ITask {
    id: string;
    title: string;
    description?: string;
    status: 'todo' | 'in-progress' | 'done'; // |(union) is used to separate multiple  datatypes.
    priority?: 'low' | 'medium' | 'high';
    dueDate?: string;  //? indicates that this property is optional.
    createdAt: string;
    updatedAt: string;
    assignedTo?: string;
}

interface ITodoList { // this interface is used to define the structure of an object for a todo list class.
    tasks: Array<ITask>;
    createTask(task: ITask): void;
    // updateTask(id: number, task: ITask): void; 	
    // deleteTask(id: number): void;
    getAllTasks(): void;
}

class TodoList implements ITodoList { 
    tasks: Array<ITask> = [];

    createTask(task: ITask): void {
        this.tasks.push(task);
    }

    getAllTasks(): void {
        let str = 'Task List \n';
        this.tasks.forEach(function(task) {
            str += 
            `
                Id: ${task.id}
                Title: ${task.title}
                Description: ${task.description}
                Status: ${task.status}
                Priority: ${task.priority}
                Created At: ${task.createdAt}
            `
        });
        console.log(str);
    }

}

const todoList = new TodoList();

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