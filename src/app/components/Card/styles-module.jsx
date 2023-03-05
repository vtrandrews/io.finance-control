import styled from "styled-components";

export const CardContent = styled.div`
    @media (max-width: 600px) {
        width: 270px;
        height: 128px;    
    }

    @media (min-width: 600px) {
        width: 360px;
        height: 128px;    
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