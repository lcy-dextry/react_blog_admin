import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';

// 添加相册
const addGallery = res => ({
    type: actionType.ADD_GALLERY,
    notes: res.data
})

export const addGalleryAction = (title, sketch, cover, pics) => {
    return dispatch => {
        db.collection('gallery')
            .add({
                title,
                sketch,
                cover,
                pics
            })
            .then(res => {
                dispatch(addGallery(res))
            });
    }
}

// 修改相册
const updateGallery = res => ({
    type: actionType.UPDATE_GALLERY,
    notes: res.data
})

export const updateGalleryAction = (title, sketch, cover, pics, id) => {
    return dispatch => {
        db.collection('gallery')
            .doc(id)
            .update({
                title,
                sketch,
                cover,
                pics
            })
            .then(res => {
                dispatch(updateGallery(res))
            });
    }
}