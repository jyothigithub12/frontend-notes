interface ITask {
    id: string;
    title: string;
    description?: string;
    status: 'todo' | 'in-progress' | 'done'; // |(union) is used to separate multiple  datatypes.
    priority?: 'low' | 'medium' | 'high';
    dueDate?: string; //? indicates that this property is optional.
    createdAt: string;
    updatedAt: string;
    assignedTo?: string;
}
// here interface is not used for the class TodoList. Instead, we are using abstract class.
abstract class TodoList {
    tasks: Array<ITask> = [];

    createTask(task: ITask): void { 
        this.tasks.push(task);
    }

    abstract updateTask(id: string, task: ITask): void; // here createTask(), updateTask() and deleteTask() are known as abstract methods.
    abstract deleteTask(id: string): void;

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

class ExtendedTodoList extends TodoList {

    updateTask(id: string, task: ITask): void {
        const index = this.tasks.findIndex(task => task.id === id);

        this.tasks.splice(index, 1, task);

        console.log('Updated task successfully');
    }

    deleteTask(id: string): void {
        
    }
}

const todoList = new ExtendedTodoList();

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
