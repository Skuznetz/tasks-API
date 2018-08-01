import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import './Task.less';
const Task = React.createClass({
    render(){
        return (
            <div className='Task'>
            <Checkbox className='Task__checkbox'
                      checked={this.props.isCompleted} />
                <div className='Task__text'>
                    <div className='Task__title'>{this.props.text}</div>
                    </div>
                    </div>);
    }
});
export default Task;

        

    