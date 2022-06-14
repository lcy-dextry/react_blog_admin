import styled from "styled-components";

export const MenuWrapper = styled.div`
    width: 420px;
    height: 140px;
    margin-left: 20px;
    box-shadow: 0 0 10px rgba(29, 165, 122, 0.2);
    transition: all 0.1s;

    &:hover{
        transform: scaleX(1.01) scaleY(1.01);
    }

    .current-date{
        width: 300px;
        margin-left: 60px;
        margin-top: 20px;
        font-size: 36px;
        font-weight: 700;
        text-align: center;
    }

    .menu{
        width: 300px;
        margin-left: 60px;
        text-align: center;
        margin-top: 30px;
        font-size: 20px;
        font-family: '楷体';

        span:last-child{
            margin-left: 10px;
            font-weight: 600;
            background-color: rgba(29, 165, 122, 0.2);
        }
    }
`