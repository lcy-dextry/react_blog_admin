import styled from "styled-components";

export const DateWrapper = styled.div`
    display: flex;
    
    span{
        margin: 0 9px;
        margin-top: 6px;
        height: 32px;
        line-height: 32px;
        color: black;
        font-size: 15px;
        font-weight: 600;
    }

   .date-selector{
        width: 300px;
        height: 32px;
        margin-top: 6px;
        margin-right: 9px;

        input{
            text-align: center;
        }

        .ant-picker-input{
            position: relative;

            .ant-picker-suffix{
                margin: 0;
                position: absolute;
                top: -3px;
                right: 5px;
                height: 32px;

                .anticon-calendar{
                    margin: 0;
                }
            }

            .ant-picker-clear{
                position: absolute;
                z-index: 1;
                top: 6px;
                right: -5px;
                height: 30px;

                .anticon-close-circle{
                    margin: 0;
                }
            }

        }

        
        
   }

`