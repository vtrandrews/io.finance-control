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

export const CardBackground = styled.div`
    @media (max-width: 600px) {
        width: ${(props) => props.size ? props.size : "280px"};
        height: ${(props) => props.height ? props.height : "280px"};    
    }

    @media (min-width: 600px) {
        width: ${(props) => props.size ? props.size : "480px"};
        height: ${(props) => props.height ? props.height : "460px"};
    }

    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 12px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    margin-left: ${(props) => props.mLeft};
    margin-top: ${(props) => props.mTop};
    margin-bottom: ${(props) => props.mBottom};
    margin-right: ${(props) => props.mRight};
`;

export const Div = styled.div`
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexDirection};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
`;

export const Button = styled.button`
    width: ${(props) => props.size ? props.size : "89px"};
    font-size: 14px;
    height: 38px;
    color: ${(props) => props.color ? props.color : "#ffffff"};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#333"};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 12px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    border: none;
    transition: all 0.2s;

    &:hover {
        background-color: #707070;
        color:  #ffffff;
        transition: all 0.2s;
    }
`;