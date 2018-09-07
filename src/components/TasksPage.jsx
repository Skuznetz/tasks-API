import React from 'react';
import TasksActions from '../actions/TasksActions';
import TasksStore from '../stores/TaskStore';

import IconButton from 'material-ui/lib/icon-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import './TasksPage.less';
import Task from './Task.jsx';
import TaskCreateModal from './TaskCreateModal.jsx';

function getStateFromFlux() {
    return {
        tasks: TasksStore.getTasks(),
    };
}
const TasksPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            ...getStateFromFlux(),
            isCreatingTask: false
        };
    },

    componentWillMount() {
        TasksActions.loadTasks(this.props.params.id);
        // TaskListsActions.loadTaskList(this.props.params.id);
    },

    componentDidMount() {
        TasksStore.addChangeListener(this._onChange);
        // TaskListsStore.addChangeListener(this._onChange);
    },

    
    componentWillReceiveProps(nextProps) {
        if (this.props.params.id !== nextProps.params.id) {
            TasksActions.loadTasks(nextProps.params.id);
            // TaskListsActions.loadTaskList(nextProps.params.id);
        }
    },

    componentWillUnmount() {
        TasksStore.removeChangeListener(this._onChange);
        // TaskListsStore.removeChangeListener(this._onChange);
    },

      handleStatusChange(taskId, { isCompleted }) {
        TasksActions.updateTaskStatus({
            taskListId: this.props.params.id,
            taskId: taskId,
            isCompleted: isCompleted
        });
    },

    handleTaskUpdate(taskId, { text }) {
        TasksActions.updateTask({
            taskListId: this.props.params.id,
            taskId: taskId,
            text: text
        });
    },
      handleAddTask() {
        this.setState({ isCreatingTask : true });
    },

    handleClose() {
       this.setState({ isCreatingTask : false });
    },

    handleTaskSubmit(task) {
        const taskListId = this.props.params.id;

        TasksActions.createTask({ taskListId, ...task });

        this.setState({ isCreatingTask : false });
    },


    render() {
        return (
            <div className='TasksPage'>
                <div className='TasksPage__header'>
                    <h2 className='TasksPage__title'>List name</h2>
                    <div className='TasksPage__tools'>
                        <IconButton onClick={this.props.onAddTask}>
                            <ContentAdd />
                        </IconButton>
                    </div>
                </div>
                 <div className='TaskPage__tasks'>
                     {
                          this.props.tasks.map(task =>
                        <Task
                            key={task.id}
                            text={task.text}
                            isCompleted={task.isCompleted}
                            onStatusChange={this.props.onTaskStatusChange.bind(null, task.id)}
                            onUpdate={this.props.onTaskUpdate.bind(null, task.id)}
                        />
                    )   
                     }
                </div>
       </div> 
      );
   },
    _onChange() {
        this.setState(getStateFromFlux());
    }

    
});
export default TasksPage;
