import { Map } from 'immutable';
import * as actionType from './actionType';

const defaultState = Map({
   drafts: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.GET_DRAFTS:
            return state.set('drafts', action.drafts);
        case actionType.DELETE_DRAFTS:
            return state.set('drafts', action.drafts);
        default:
            return state;
    }
}

export { reducer };