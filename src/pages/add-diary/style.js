import styled from "styled-components";

export const AddDiaryWrapper = styled.div`
`

export const HeaderWapper = styled.div`
    display: flex;
    height: 50px;
    background-color: rgba(29, 165, 122, 0.2);

    .feeling{
        width: 70px !important;
        height: 40px !important;
        margin-top: 5px;
        margin-left: 510px;

        .ant-select-selector{
            height: 40px;
        }

        .ant-select-selection-item{
            height: 40px;
            line-height: 40px;
        }
    }

    .btn{
        position: relative;
        width: 86px;
        height: 40px;
        margin: 5px;
        background-color: rgba(29, 165, 122);

        span{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            color: #FFF;
            font-size: 16px;
            text-align: center;
        }
    }

    .btn-2{
        width: 86px;
        height: 40px;
        margin: 5px;
        margin-left: 0;
        border: none;
        background-color: rgba(29, 165, 122);
        color: #FFF;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    height: 500px;
    
    .textarea,.show-html{
        width: 860px;
        min-height: calc(100vh - 300px);
    }

    .textarea{
        overflow: visible;
        background-color: rgba(10, 150, 122, 0.1);
    }

    .show-html{
        overflow-y: scroll !important;
        border: 1px solid #d9d9d9;
        border-left: none;
    }
`