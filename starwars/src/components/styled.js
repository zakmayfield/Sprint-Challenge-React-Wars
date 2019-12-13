import React from 'react'
import styled from 'styled-components';

export const CardStyled = styled.div`
    display: flex;
    flex-flow: row wrap;

    word-wrap: break-word;

    background-color: #fff;
    background-clip: border-box;

    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;

    width: 300px;
    margin: 2rem;
`;

export const CardBodyStyled = styled.div`
  padding: 1.25rem;

  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const SpanStyled = styled.span`
  font-weight: 600;
`;