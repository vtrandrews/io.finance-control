import styled from "styled-components";

export const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: ${(props) => props.size ? props.size : "16px"};
    font-weight: ${(props) => props.weight ? props.weight : "300"};
    color: ${(props) => props.color ? props.color : "#000"};
    line-height: ${(props) => props.lineHeight};
    margin: ${(props) => props.margin};
    margin-left: ${(props) => props.mLeft};
    margin-top: ${(props) => props.mTop};
    margin-bottom: ${(props) => props.mBottom};
    margin-right: ${(props) => props.mRight};
`;