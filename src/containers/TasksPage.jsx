// import React from 'react';
// import TasksActions from '../actions/TasksActions';
// import TaskListsActions from '../actions/TaskListsActions';
// import Task from '../components/Task.jsx';


// import TasksPage from '../components/TasksPage.jsx';

// import TasksStore from '../stores/TaskStore';
// import TaskListsStore from '../stores/TaskListsStore';

// import TaskCreateModal from '../components/TaskCreateModal.jsx';





function getStateFromFlux() {
    return {
        tasks: TasksStore.getTasks(),
        // taskList: TaskListsStore.getCurrentTaskList() || {}
    };
}

const TasksPageContainer = React.createClass({
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
            <div>
                <TasksPage
                    taskList={this.state.taskList}
                    isLoadingTasks={this.state.isLoadingTasks}
                    isLoadingTasks={this.state.isLoadingTasks}
                    onUpdateTaskList={this.handleUpdateTaskList}
                    onTaskUpdate={this.handleTaskUpdate}
                />
                <TaskCreateModal
                    isOpen={this.state.isCreatingTask}
                    onSubmit={this.handleTaskSubmit}
                    onClose={this.handleClose}
                />
       </div> 
      );
   },
      _onChange() {
        this.setState(getStateFromFlux());
    }
});
// export default TasksPageContainer;
