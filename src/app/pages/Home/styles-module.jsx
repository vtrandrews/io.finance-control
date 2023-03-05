import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    width: 100%;
    background-color: #323232;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        height: 140px;
    }

    @media (min-width: 600px) {
        height: 180px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
`;

export const ContainerField = styled.div`
    position: relative;
    display: flex;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : "center"};
    text-align: ${(props) => props.textAlign};
    flex-direction: ${(props) => props.flexDir ? props.flexDir : "column"};
    width: 100%;
    height: ${(props) => props.hSize ? props.hSize : "50px"};
    margin: ${(props) => props.margin};
    margin-left: ${(props) => props.mLeft};
    margin-top: ${(props) => props.mTop};
    margin-bottom: ${(props) => props.mBottom};
    margin-right: ${(props) => props.mRight};
`;