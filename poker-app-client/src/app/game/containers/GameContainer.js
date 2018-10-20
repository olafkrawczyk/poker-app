import { connect } from 'react-redux'
import { addPlayerAction, removePlayerAction } from '../../../actions'
import Game from '../components/Game'

const mapStateToProps = state => ({
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  onAddPlayer: playerId => dispatch(addPlayerAction(playerId)),
  onRemovePlayer: playerId => dispatch(removePlayerAction(playerId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)