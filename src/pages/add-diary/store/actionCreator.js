import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';
import moment from 'moment';

// 添加日记
const addDiary = res => ({
    type: actionType.ADD_DIARY,
    notes: res.data
})

export const addDiaryAction = (content, markdownContent, feeling) => {
    return dispatch => {
        db.collection('diary')
            .add({
                content,
                markdownContent,
                feeling,
                date: moment().format('YYYY-MM-DD HH:mm:ss')
            })
            .then(res => {
                dispatch(addDiary(res))
            });
    }
}