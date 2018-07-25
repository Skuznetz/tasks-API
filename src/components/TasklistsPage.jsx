import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import ListIcon from 'material-ui/lib/svg-icons/action/view-list';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import ExitIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import './TasklistsPage.less';

function getStateFromFlux() {
    return {
        taskLists: TaskListsStore.getTaskLists()
    };
}

const TasklistsPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            ...getStateFromFlux()
            
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

    render() {
        const { router } = this.context;

        return (
            <div className='TasklistsPage'>
                <div className='TasklistsPage__menu'>
                    <List className='TasklistsPage__list'>
                        <h3 className='TasklistsPage__title'>Serg Tasks</h3>
                        <Divider />
                        <List className='TasklistsPage__list'>
                            <ListItem
                                leftIcon={<HomeIcon />}
                                primaryText="Home"
                                onClick={router.push.bind(null, `/lists`)}
                            />
                            <ListItem
                                leftIcon={<ListIcon />}
                                primaryText="About"
                                onClick={router.push.bind(null, `/about`)}
                            />
                        </List>
                        <Divider />
                        <List className='TasklistsPage__list' subheader="Task Lists">
                        </List>
                        <Divider />
                        <List className='TasklistsPage__list'>
                            <ListItem
                                leftIcon={<ExitIcon />}
                                primaryText="Log out"
                                onClick={this.handleLogOut}
                            />
                        </List>
                    </List>
                </div>
                <div className='TasklistsPage__tasks'>
                    {this.props.children}
                </div>
            </div>
        );
    },
     _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default TasklistsPage;