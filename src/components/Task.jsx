import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
// import './Task.less';
const Task = React.createClass({
    handleCheck(){
        this.props.onStatusChange({
            isCompleted: !this.props.isCompleted
        });
    },
    render(){
        return (
            <div className='Task'>
            <Checkbox className='Task__checkbox'
                      checked={this.props.isCompleted}
                      onCheck={this.handleCheck} />
                 {/* <div className='Task__text' onClick={this.handleEdit}> */}
                        <div className='Task__title'>{this.props.text}</div>
                    {/* </div> */}
                    </div>);
    }
});
export default Task;

        

    