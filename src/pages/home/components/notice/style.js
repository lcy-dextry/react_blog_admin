import styled from "styled-components";

export const NoticeWrapper = styled.div`
    width: 420PX;
    height: 140PX;
    margin-left: 20px;
    box-shadow: 0 0 10px rgba(29, 165, 122, 0.2);
    transition: all 0.1s;

    &:hover{
        transform: scaleX(1.01) scaleY(1.01);
    }

    .notice{
        width: 300px;
        height: 80px;
        margin-left: 60px;
        margin-top: 30px;
        line-height: 80px;
        font-size: 18px;
        text-align: center;
    }
`