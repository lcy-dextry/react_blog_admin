import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';

// 添加相册
const getGallery = res => ({
    type: actionType.GET_GALLERY,
    gallery: res.data
})

export const getGalleryAction = () => {
    return dispatch => {
        db.collection('gallery')
            .get()
            .then(res => {
                dispatch(getGallery(res))
            })
    }
}