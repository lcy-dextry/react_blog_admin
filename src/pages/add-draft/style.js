import styled from "styled-components";

export const AddDraftWrapper = styled.div`
`

export const HeaderWrapper = styled.div`
    height: 102px;
    background-color: rgba(29, 165, 122, 0.2);

    .title-input{
        display: flex;
        justify-content: space-between;
        height: 58px;

        input{
            height: 40px;
            margin-top: 9px;
            margin-right: 9px;
            font-size: 16px;
            color: gray;
        }

        .input-1{
            width: 1100px;
            margin: 9px;
        }

        .input-2{
            width: 395px;
        }

        button{
            position: relative;
            height: 40px;
            width: 86px;
            margin-top: 9px;
            margin-right: 9px;
            background-color: rgba(29, 165, 122);
            font-size: 16px;
            color: #FFF;

            span{
                position: absolute;
                left: 11px;
                top: 5px;
                height: 30px;
                line-height: 30px;
            }
        }
    }

    .title-intro{
        display: flex;
        justify-content: space-between;
        height: 44px;
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
        background-color: rgba(10, 150, 122, 0.1);
    }

    .show-html{
        overflow-y: scroll;
        border: 1px solid #d9d9d9;
        border-left: none;
    }
`