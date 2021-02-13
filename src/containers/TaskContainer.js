
import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import { addTask } from '../redux/taskReducer';

const mapStateToProps = (state) => ({
  tasks: state.task.tasks
});

export default connect(mapStateToProps, { addTask })(Form);;