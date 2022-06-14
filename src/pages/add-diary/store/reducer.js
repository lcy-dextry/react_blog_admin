import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
   diary: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.ADD_DIARY:
            return state.set('diary', action.diary);
        default:
            return state;
    }
}

export { reducer };
