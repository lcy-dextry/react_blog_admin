import styled from "styled-components";

export const WelcomeWrapper = styled.div`
    display: flex;
    width: 840px;
    height: 140px;
    box-shadow: 0 0 10px rgba(29, 165, 122, 0.2);
    transition: all 0.1s;

    &:hover{
        transform: scaleX(1.01) scaleY(1.01);
    }

    .profile-img{
        width: 120px;
        height: 120px;
        margin-top: 10px;
        margin-left: 20px;
        background-image: url(${require('@/assets/img/profile2.png')});
        background-size: cover;
    }

    .text{
        margin-left: 10px;
        li:first-child{
            margin-top: 30px;
            font-size: 36px;
            font-weight: 700;

            span{
                color: rgba(29, 165, 122);
            }
        }

        li:last-child{
            margin-top: 20px;
            font-size: 18px;
            font-weight: 600;
            font-family: '楷体';
        }
    }
`