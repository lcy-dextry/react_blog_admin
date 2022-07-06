import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';

// 添加笔记
const addNotes = res => ({
    type: actionType.ADD_NOTES,
    notes: res.data
})

export const addNotesAction = (title, titleEng, content, markdownContent, tags, type, date) => {
    return dispatch => {
        db.collection('notes')
            .add({
                title,
                titleEng,
                content,
                markdownContent,
                tags,
                type,
                date,
            })
            .then(res => {
                dispatch(addNotes(res))
            });
    }
}

// 添加草稿
const addDraft = res => ({
    type: actionType.ADD_DRAFTS,
    drafts: res.data
})

export const addDraftAction = (title, titleEng, content, markdownContent, tags, type, date) => {
    return dispatch => {
        db.collection('drafts')
            .add({
                title,
                titleEng,
                content,
                markdownContent,
                tags,
                type,
                date,
            })
            .then(res => {
                dispatch(addDraft(res))
            });
    }
}

// 更新日记
const updateNotes = res => ({
    type: actionType.UPDATE_NOTES,
    notes: res.data
})

export const updateNotesAction = (title, titleEng, content, markdownContent, tags, type, date, id) => {
    return dispatch => {
        db.collection('notes')
            .doc(id)
            .update({
                title,
                titleEng,
                content,
                markdownContent,
                tags,
                type,
                date,
            })
            .then(res => {
                dispatch(updateNotes(res))
            });
    }
}

// 更新草稿
const updateDrafts = res => ({
    type: actionType.UPDATE_DRAFTS,
    drafts: res.data
})

export const updateDraftsAction = (title, titleEng, content, markdownContent, tags, type, date, id) => {
    return dispatch => {
        db.collection('drafts')
            .doc(id)
            .update({
                title,
                titleEng,
                content,
                markdownContent,
                tags,
                type,
                date,
            })
            .then(res => {
                dispatch(updateDrafts(res))
            });
    }
}