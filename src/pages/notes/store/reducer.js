import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
   notes: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.GET_NOTES:
            return state.set('notes', action.notes);
        case actionType.DELETE_NOTES:
            return state.set('notes', action.notes);
        case actionType.GET_NOTES_BY_ID:
            return state.set('notes',action.notes);
        default:
            return state;
    }
}

export { reducer };