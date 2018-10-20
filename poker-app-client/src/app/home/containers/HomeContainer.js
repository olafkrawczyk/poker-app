import { connect } from 'react-redux';
import { createNewGameAction } from '../../../actions';
import Home from '../components/Home';


const mapDispatchToProps = dispatch => ({
  onCreateNewGame: id => dispatch(createNewGameAction(id))
});

export default connect(
null,
  mapDispatchToProps
)(Home)