import styled from "styled-components";

export const TagInputWrapper = styled.div`
    span{
        margin: 0 9px;
        margin-top: 6px;
        height: 32px;
        line-height: 32px;
        color: black;
        font-size: 15px;
        font-weight: 600;
    }

    .tag{
        height: 32px;
        margin-top: 6px;
        margin-right: 5px;

        .ant-select-selector{
            width: 740px;
            height: 32px;
        }

        .ant-select-selection-item{
            margin: 0;
            background-color: #1DA57A;
            span{
                height: 24px;
                line-height: 24px;
                margin: 0;
                font-size: 12px;
                color: #FFF;
            }
        }
    }
`