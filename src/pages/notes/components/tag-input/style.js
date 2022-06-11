import styled from "styled-components";

export const TagInputWrapper = styled.div`
    .tag{
        height: 40px;
        margin-top: 5px;
        margin-right: 5px;

        .ant-select-selector{
            position: relative;
            width: 500px;
            height: 40px;

            .ant-select-selection-placeholder{
                height: 30px;
                line-height: 30px;
                font-size: 16px;
                color: gray;
            }
        }
    }
`