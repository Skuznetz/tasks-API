import React from 'react';
import TaskListsStore from '../stores/TaskListsStore';
import TaskListsActions from '../actions/TaskListsActions';
import TaskListCreateModal from './TaskListCreateModal.jsx';
import TasklistsPage from '../components/TasklistsPage.jsx';




// import './TasklistsPage.less';

function getStateFromFlux() {
    return {
        taskLists: TaskListsStore.getTaskLists()
    };
}

const TasklistsPageContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            ...getStateFromFlux(),
             isCreatingTaskList: false

        };
    },

    componentWillMount() {
        TaskListsActions.loadTaskLists();
    },

    componentDidMount() {
        TaskListsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        TaskListsStore.removeChangeListener(this._onChange);
    },

      handleAddTaskList() {
        this.setState({ isCreatingTaskList : true });
    },

    handleClose() {
        this.setState({ isCreatingTaskList : false });
    },

    handleTaskListSubmit(taskList) {
        TaskListsActions.createTaskList(taskList);

        this.setState({ isCreatingTaskList : false });
    },

    render() {

        return (
            <div>
                   <TasklistsPage
                    taskLists={this.state.taskLists}
                    selectedListId={this.props.params.id}
                    page={this.props.children}
                    onAddTaskList={this.handleAddTaskList}
                    onLogOut={this.onLogOut}
                />
                 <TaskListCreateModal
                    isOpen={this.state.isCreatingTaskList}
                    onSubmit={this.handleTaskListSubmit}
                    onClose={this.handleClose}
                />
            </div>
        );
    },
     _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default TasklistsPageContainer;