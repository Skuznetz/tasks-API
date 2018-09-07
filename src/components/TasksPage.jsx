import React from 'react';
import TasksActions from '../actions/TasksActions';
import TasksStore from '../stores/TaskStore';

import IconButton from 'material-ui/lib/icon-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import './TasksPage.less';
import Task from './Task.jsx';
import TaskCreateModal from './TaskCreateModal.jsx';

const TasksPage = React.createClass({
    getInitialState() {
        return {
            ...getStateFromFlux(),
            isCreatingTask: false
        };
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
   }
    
});
export default TasksPage;
