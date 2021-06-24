import styled from "styled-components"

// 一般使用
export const HomeWrapper = styled.div`
    font-size: 30px;
    color: pink;
    .banner {
        background-color: hotpink;
        span {
            color: red;
            &.active {
                color: yellow;
            }
            &:hover {
                color: tomato;
            }
            &::before {
                content: "哈哈哈";
            }
        }
    }
`

export const TitleWrapper = styled.h2`
    text-decoration: underline;
`