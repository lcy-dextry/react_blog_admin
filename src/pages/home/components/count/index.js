import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import { getDiaryAction } from '@/pages/diary/store/actionCreator';
import { getNotesAction } from '@/pages/notes/store/actionCreator';
import { getGalleryAction } from '@/pages/pic/store/actionCreator';
import { getDraftsAction } from '@/pages/drafts/store/actionCreator';

const BlogTypeCount = memo((props) => {
    // 日记
    const dispatch = useDispatch();
    const { alldiary, allnotes, allgallery, alldrafts } = useSelector(
        state => ({
            alldiary: state.getIn(['diary', 'diary']),
            allnotes: state.getIn(['notes', 'notes']),
            allgallery: state.getIn(['gallery', 'gallery']),
            alldrafts: state.getIn(['drafts', 'drafts'])
        }),
        shallowEqual
    );

    useEffect(() => {
        dispatch(getDiaryAction());
        dispatch(getNotesAction());
        dispatch(getGalleryAction());
        dispatch(getDraftsAction())
    }, [dispatch]);

    const [count, setCount] = useState(0);
    const { type } = props;

    useEffect(() => {
        switch (type) {
            case '数据库': {
                setCount(allnotes.length + allgallery.length + alldrafts.length + alldiary.length);
                break;
            }
            case '笔记数': {
                setCount(allnotes.length);
                break;
            }
            case '图库数': {
                setCount(allgallery.length);
                break;
            }
            case '日记数': {
                setCount(alldiary.length);
                break;
            }
            case '草稿数': {
                setCount(alldrafts.length);
                break;
            }
            default: {
                break;
            }
        }
    })

    return (
        <div className='count'>{count}</div>
    );
})

export default BlogTypeCount;