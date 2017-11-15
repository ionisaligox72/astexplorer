import {connect} from 'react-redux';
import {setCode, setCursor} from '../store/actions';
import Editor from '../components/Editor';
import {getCode, getParser, getParseError, getKeyMap} from '../store/selectors';

function mapStateToProps(state) {
  return {
    keyMap: getKeyMap(state),
    value: getCode(state),
    mode: getParser(state).category.id,
    error: getParseError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onContentChange: ({value, cursor}) => {
      dispatch(setCode({code: value, cursor}));
    },
    onActivity: cursor => dispatch(setCursor(cursor)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
