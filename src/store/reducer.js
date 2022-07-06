import { combineReducers } from "redux-immutable";

import { reducer as notesReducer } from '@/pages/notes/store/reducer';  
import { reducer as draftsReducer } from '@/pages/drafts/store/reducer';  
import { reducer as addNoteReducer } from '@/pages/add-note/store/reducer'; 
import { reducer as galleryReducer } from '@/pages/pic/store/reducer';  
import { reducer as addGalleryReducer } from '@/pages/add-gallery/store/reducer';
import { reducer as diaryReducer } from '@/pages/diary/store/reducer';
import { reducer as addDiaryReducer } from '@/pages/add-diary/store/reducer';


const reducer = combineReducers({
    notes: notesReducer,
    drafts: draftsReducer,
    addNotes: addNoteReducer,
    gallery: galleryReducer,
    addGallery: addGalleryReducer,
    diary: diaryReducer,
    addDiary: addDiaryReducer
});

export default reducer;