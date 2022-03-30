import styled from 'styled-components';

export const DropContainer = styled.div `
    color: #fff;
    padding: 48px 24px;
    background: ${({LightBg}) => (LightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 0 24px 48px 24px;
    }
`;

export const DropWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    max-height: 970px;
    width: 100%;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center; 
`;

export const DropRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    width: 100%;
    max-width: 1500px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    // padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
`;

export const TopLine = styled.p`
    color: #00ffff;
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 24px;
    font-style: italic;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const Subtitle = styled.p`
    width: 100%;
    margin-bottom: 12px;
    text-align: justify;
    font-size: 12px;
    line-height: 18px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 8px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 12px;

    @media screen and (max-width: 768px) {
        justify-content: center;
        padding: 8px 24px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 48px 0 10px 0;
    padding-right: 0;
`;
