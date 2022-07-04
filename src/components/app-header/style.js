import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
    position: relative;
    height: 54px;
    box-shadow: 0 5px 5px rgb(220, 220, 220);

    .to-blog{
        display: block;
        position: absolute;
        top: 7px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 14px;
        background-color: transparent;
        transition: 0.3s;

        svg{
            position: absolute;
            top: 7px;
            left: 7px;
        }

        &:hover{
            background-color: rgba(60, 240, 160);

            & svg{
                color: #FFF !important;
            }
        }
    }
`