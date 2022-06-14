import styled from "styled-components";

export const AddGalleryWrapper = styled.div`
`

export const HeaderWrapper = styled.div`
    height: 50px;
    background-color: rgba(29, 165, 122, 0.2);

    .btn-2,.btn-add{
        margin: 5px;
        width: 86px;
        height: 40px;
        border: none;
        background-color: #1DA57A;
        color: #FFF;
        font-size: 16px;
    }

    .btn-add{
        margin-left: 0;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    .left-part{
        padding: 30px;
        width: 724px;
        height: 770px;
        background-color: rgba(10,150,122,0.1);

        >div{
            display: flex;
            margin-bottom: 30px;

            .title{
                width: 50px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                font-size: 16px;
                font-weight: 700;
            }

            .input-box{
                width: 614px;
                margin-left: 10px;
            }
        }
    }

    .right-part{
        width: 996px;
        height: 770px;

        ul {
            display: flex !important;
            width: 996px;
            padding: 20px;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-content: space-around;
        }

        li {
            width: 400px;
            height: 300px;
            list-style: none;
            background-size: cover;
            margin-bottom: 20px;
        }
    }
`