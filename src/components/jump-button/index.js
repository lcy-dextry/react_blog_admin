import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

// 工具


const MyButton = memo((props) => {
    const { url, text } = props;
    const navigate = useNavigate();
    const handleClick = () => navigate(url);

    return (
        <button className='btn-2' onClick={handleClick}>{text}</button>
    )
})

export default MyButton;

