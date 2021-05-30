import { LightningElement } from 'lwc';

export default class TodoList extends LightningElement {
    tasklist = [
        {
        taskId: '0',
        task: 'Release Cybernine onto the internet',
        completed: false
        },
        {
        taskId: '1',
        task: 'Finish programming Cybernine systems',
        completed: false
        }
    ]

    get areTasks(){
        return this.tasklist.length > 0;
    }
}