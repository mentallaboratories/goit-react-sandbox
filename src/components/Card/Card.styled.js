import styled from 'styled-components';

export const Card = styled.div`
    padding: 5px 12px;
    width: 400px;
    height: auto;

    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 5px;

    font-size: 12px;

    background-color: white;
    border-radius: 5px;

    -webkit-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
    -moz-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
    box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);

    img{
        background-color: darkgray;
        border-radius: 5px;
        padding: 3px;

        width: 85px;
        height: 85px;

    }

    p{
        font-size: 16px;
        line-height: 1.16;
    }
`;

export const IsDone = styled.span`
    display: inline-block;
    width: auto;
    height: auto;
    background-color: ${p => {
        return p.active ? "green" : "red";
        }};
`;