import styled from 'styled-components';

export const NavBarWrapper = styled.div`
    position: fixed;
    z-index: 1;
    width: 160px;
    padding-bottom: 100vh; //屏幕高度
    background-color: #0a1505;

    .title{
        margin: 20px;
        margin-top: 10px;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        color: #FFF;
        background-color: rgba(29, 165, 122, 0.6);
    }

    .nav-bar{
        display: flex;
        flex-wrap: wrap;

        a{
            width: 160px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            color: #FFF;
            text-align: center;
            background-color: transparent;
            transition: 0.3s;

            &:hover{
                background-color: rgba(29, 165, 122, 0.6);
            }
        }

        .active{
            background-color: rgba(29, 165, 122, 0.6);
        }
    }
`