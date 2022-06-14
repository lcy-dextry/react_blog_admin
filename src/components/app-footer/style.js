import styled  from "styled-components";

export const AppFooterWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    height: 70px;
    font-size: 16px;
    color: #0e1e14;

    .title{
        width: 200px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        margin-top: 10px;
        text-align: center;
    }

    .code{
        display: flex;
        justify-content: space-evenly;
        width: 150px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`