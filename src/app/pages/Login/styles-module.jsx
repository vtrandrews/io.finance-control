import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #1f1f1f;
    justify-content: center;
    align-items: center;
    overflow-x: none;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
    }

    @media (min-width: 600px) {
        display: flex;
        justify-content: center;
    }
`;

export const Input = styled.input`
    width: ${(props) => props.width ? props.width : "80%"};
    height: ${(props) => props.height ? props.height : "42px"};
    margin: ${(props) => props.margin};
    border-radius: 8px;
    border-color: #3f3f3f;
`;

export const FormBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;