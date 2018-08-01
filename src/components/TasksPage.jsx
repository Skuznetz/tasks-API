import React from 'react';
import TasksActions from '../actions/TasksActions';
import TaskStore from '../stores/TaskStore';

import IconButton from 'material-ui/lib/icon-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import './TasksPage.less';
import Task from './Task.jsx';



function getStateFromFlux() {
    return {
        tasks: TasksStore.getTasks()
    };
}

const TasksPage = React.createClass({
    getInitialState() {
        return {
            ...getStateFromFlux(),
            isCreatingTask: false
        };
    },

    componentWillMount() {
        TasksActions.loadTasks(this.props.params.id);
    },

    componentDidMount() {
        TasksStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
        TasksStore.removeChangeListener(this._onChange);
    },

    render() {
        return (
            <div className='TasksPage'>
                <div className='TasksPage__header'>
                    <h2 className='TasksPage__title'>List name</h2>
                    <div className='TasksPage__tools'>
                        <IconButton onClick={this.handleAddTask}>
                            <ContentAdd />
                        </IconButton>
                    </div>
                </div>
                <div className='TasksPage__tasks'>Tasks</div>
 </div> 
      );
   },
      _onChange() {
        this.setState(getStateFromFlux());
    }
});
export default TasksPage;
