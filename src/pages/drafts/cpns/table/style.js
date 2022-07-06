import styled from "styled-components";

export const TableWrapper = styled.div`
    .ant-table-thead{
        .ant-table-cell{
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            color: #000;
        }
    }
    .ant-table-tbody{
        tr td:nth-child(1){
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            color: #000
        }

        tr td:nth-child(2){
            text-align: center;
            font-size: 14px;
            color: #000
        }

        tr td:nth-child(3){
            position: relative;
            text-align: center;
            font-size: 12px;
            color: #FFF;

            .type{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
                width: 64px;
                height: 22px;
                line-height: 22px;
                border-radius: 2px;
                background-color: #1DA57A;
            }
        }

        tr td:nth-child(4){
            text-align: center;
        }

        tr td:nth-child(5){
            text-align: center;
            font-size: 14px;
            color: #FFF;

            button{
                border: none;
                border-radius: 2px;
                width: 64px;
                height: 32px;
            }

            .btn-1{
                background-color: #FF4D4F;
                margin-right: 10px;
            }

            .btn-2{
                background-color: #1DA57A;
                margin-left: 10px
            }
        }
    }
`