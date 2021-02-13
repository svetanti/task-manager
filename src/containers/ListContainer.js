
import { connect } from 'react-redux';
import List from '../components/List/List';

const mapStateToProps = (state) => ({
  tasks: state.task.tasks
});

export default connect(mapStateToProps, {})(List);;