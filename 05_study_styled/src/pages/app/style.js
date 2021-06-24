import styled from "styled-components"

export const ZohnnyButton = styled.button`
    padding: 10px 20px;
    color: yellow;
    border-color: red;
`

// 继承
export const PrimaryZohnnyButton = styled(ZohnnyButton)`
    background-color: pink;
    /* color: white; // 自己额外的 */
    color: ${props => props.theme.color};
    font-size: ${props => props.theme.fontSize};
`