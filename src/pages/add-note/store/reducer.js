import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
   notes: [],
   drafts: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.ADD_NOTES:
            return state.set('notes', action.notes);
        case actionType.ADD_DRAFTS:
            return state.set('drafts', action.drafts);
        default:
            return state;
    }
}

export { reducer };
