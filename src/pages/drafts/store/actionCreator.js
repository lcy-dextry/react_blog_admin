import * as actionType from './actionType';
import { db } from '@/utils/cloudBase';
import { notification } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


// 获取笔记
const getDrafts = res => ({
    type: actionType.GET_DRAFTS,
    drafts: res.data
})

export const getDraftsAction = () => {
    return dispatch => {
        db.collection('drafts')
            .get()
            .then(res => {
                dispatch(getDrafts(res))
            })
    }
}

// 删除笔记
const deleteDrafts = res => ({
    type: actionType.DELETE_DRAFTS,
    drafts: res.data
})

export const deleteDraftsAction = (id) => {
    return dispatch => {
        db.collection('drafts')
            .doc(id)
            .remove()
            .then(res => {
                dispatch(deleteDrafts(res));
                notification.open({
                    message: '删除成功',
                    icon: <DeleteOutlined style={{ color: '#1DA57A' }} />,
                    placement: 'bottomLeft',
                    duration: 1.5
                })
            })
    }
}
