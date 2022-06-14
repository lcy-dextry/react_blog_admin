import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import { getDiaryAction } from '@/pages/diary/store/actionCreator';
import { getNotesAction } from '@/pages/notes/store/actionCreator';
import { getGalleryAction } from '@/pages/pic/store/actionCreator';

const BlogTypeCount = memo((props) => {
    // 日记
    const dispatch = useDispatch();
    const { alldiary } = useSelector(
        state => ({
            alldiary: state.getIn(['diary', 'diary'])
        }), shallowEqual
    );

    useEffect(() => {
        dispatch(getDiaryAction())
    }, [dispatch]);

    // 笔记
    const { allnotes } = useSelector(
        state => ({
            allnotes: state.getIn(['notes', 'notes'])
        }), shallowEqual
    );

    useEffect(() => {
        dispatch(getNotesAction())
    }, [dispatch]);

    // 图库
    const { allgallery } = useSelector(
        state => ({
            allgallery: state.getIn(['gallery', 'gallery'])
        }), shallowEqual
    );

    useEffect(() => {
        dispatch(getGalleryAction())
    }, [dispatch]);

    const [count, setCount] = useState(0);
    const { type } = props;

    useEffect(() => {
        switch (type) {
            case '笔记': {
                setCount(allnotes.length);
                break;
            }
            case '图库': {
                setCount(allgallery.length);
                break;
            }
            case '日记': {
                setCount(alldiary.length);
                break;
            }
            default: {
                break;
            }
        }
    }, [type]);
    return (
        <div className='count'>{count}</div>
    );
})

export default BlogTypeCount;