import { connect } from "react-redux";

import * as actions from '../actions';
// import {dec, inc, rnd} from '../actions';
// import { useSelector, useDispatch } from "react-redux";

const Counter  = ({counter, dec, inc, rnd}) => {   
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

export default connect(mapStateToProps, actions)(Counter);
