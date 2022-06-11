import React, { memo } from 'react';
import { AddBtnWrapper } from './style';

const AddBtn = memo((props) => {
    return (
            <AddBtnWrapper
                className='btn-1'
                href={props.link}
            >
                {props.title}
            </AddBtnWrapper>
    )
})

export default AddBtn