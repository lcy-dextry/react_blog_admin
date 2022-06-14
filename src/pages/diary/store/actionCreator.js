import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';
import { notification } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


// 获取日记
const getDiary = res => ({
    type: actionType.GET_DIARY,
    diary: res.data
})

export const getDiaryAction = () => {
    return dispatch => {
        db.collection('diary')
            .get()
            .then(res => {
                dispatch(getDiary(res))
            })
    }
}

// 删除日记
const deleteDiary = res => ({
    type: actionType.DELETE_DIARY,
    diary: res.data
})

export const deleteDiaryAction = (id) => {
    return dispatch => {
        db.collection('diary')
            .doc(id)
            .remove()
            .then(res => {
                dispatch(deleteDiary(res));
                notification.open({
                    message: '删除成功',
                    icon: <DeleteOutlined style={{ color: '#1DA57A' }} />,
                    placement: 'bottomLeft',
                    duration: 1.5
                })
            })
    }
}
