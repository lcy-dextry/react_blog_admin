import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    width: 324px;
    height: 140px;
    margin-right: 20px;
    box-shadow: 0 0 10px rgba(29, 165, 122, 0.2);
    transition: all 0.1s;

    &:hover{
        transform: scaleX(1.01) scaleY(1.01);
    }

    .title{
        position: absolute;
        width: 60px;
        top: 20px;
        left: 20px;
        font-size: 20px;
        color: #000;
    }

    .count{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 80px;
        font-weight: 700;
        color: rgb(29, 165, 122);
    }
`