import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    background: ${({LightBg}) => (LightBg ? '#f9f9f9' : '#010606')};
`;

export const Wrapper = styled.iframe`
    width: 100%;
    height: 1500px;
    frameborder: 0;
`;
