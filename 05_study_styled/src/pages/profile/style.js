import styled from "styled-components"

// props穿透
// attrs属性（括号对象里面的通过回调函数的形式传递到``反符号里面）
export const ZohnnyInput = styled.input.attrs({
    bColor: "red" // 这里面的也可以props传到下面
})`
    background-color: lightpink;
    border-color: ${props => props.bColor};
    color: ${props => props.color}; // 标签里面传递的
`