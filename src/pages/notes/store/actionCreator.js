import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';
import { notification } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


// 获取笔记
const getNotes = res => ({
    type: actionType.GET_NOTES,
    notes: res.data
})

export const getNotesAction = () => {
    return dispatch => {
        db.collection('notes')
            .get()
            .then(res => {
                dispatch(getNotes(res))
            })
    }
}

// 获取指定id笔记
const getNotesByID = res => ({
    type: actionType.GET_NOTES_BY_ID,
    notesByID: res.data
})

export const getNotesByIDAction = (id) => {
    return dispatch => {
        db.collection('notes')
            .doc(id)
            .get()
            .then(res => {
                dispatch(getNotesByID(res))
            })
    }
}

// 删除笔记
const deleteNotes = res => ({
    type: actionType.DELETE_NOTES,
    notes: res.data
})

export const deleteNotesAction = (id) => {
    return dispatch => {
        db.collection('notes')
            .doc(id)
            .remove()
            .then(res => {
                dispatch(deleteNotes(res));
                notification.open({
                    message: '删除成功',
                    icon: <DeleteOutlined style={{ color: '#1DA57A' }} />,
                    placement: 'bottomLeft',
                    duration: 1.5
                })
            })
    }
}
