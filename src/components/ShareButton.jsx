import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonStyled = styled.button`
  position: absolute;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  border-radius: 50% 0 0 50%;
  z-index: 2;
  border: 0.01em solid #fffffe71;
  box-shadow: 0.1em 0.1em 1.5px rgba(0, 0, 0, 0.5);

`;

const LinkCopyStyled = styled.span`
  position: absolute;
  backdrop-filter: blur(15px);
  background-color: rgba(34, 34, 34, 0.1);
  background-color: rgba(255, 255, 255, 0.583);
  top: 1.5em;
  right: 2em;
  padding: 0.5em 1em;
  border-radius: 5em 0 0 5em;
  border: 0.01em solid #fffffe71;
  color: #272727;
`;

const ButtonShareDoneStyled = styled.button`
  position: absolute;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0.5em;
  border-radius: 1em;
  z-index: 2;
  border: 0.01em solid #fffffe71;
  right: 1em;
  margin-top: -5em;
  box-shadow: 0.1em 0.1em 1.5px rgba(0, 0, 0, 0.5);

`;

const LinkDoneCopyStyled = styled.span`
  position: absolute;
  margin-bottom: 4em;
  right: 3em;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0.5em 1em;
  border: 0.01em solid #fffffe71;
  border-radius: 5em 0 0 5em;
  color: #272727;
`;

export default function ShareButton({ index, item }) {
  const [showCopy, setShowCopy] = useState(false);
  const location = useLocation();

  const checkLocation = () => {
    if (location.pathname.includes('/done-recipes')
    || location.pathname.includes('/favorite-recipes')) {
      if (item.type === 'drink') {
        copy(`http://localhost:3000/drinks/${item.id}`);
      } else {
        copy(`http://localhost:3000/foods/${item.id}`);
      }
    } else {
      const link = location.pathname.replace('/in-progress', '');
      copy(`http://localhost:3000${link}`);
    }
    setShowCopy(true);
  };

  return (
    <div>
      {!location.pathname.includes('/done')
      && !location.pathname.includes('/favorite')
        ? (
          <Container>
            <ButtonStyled
              data-testid="share-btn"
              type="button"
              onClick={ checkLocation }
              src={ shareIcon }
            >
              <img src={ shareIcon } alt="share button" />
            </ButtonStyled>
            {showCopy && (
              <LinkCopyStyled>Link copied!</LinkCopyStyled>
            )}
          </Container>
        )
        : (
          <Container>
            <ButtonShareDoneStyled
              data-testid={ `${index}-horizontal-share-btn` }
              type="button"
              onClick={ checkLocation }
              src={ shareIcon }
            >
              <img src={ shareIcon } alt="share button" />
            </ButtonShareDoneStyled>
            {showCopy && (
              <LinkDoneCopyStyled>Link copied!</LinkDoneCopyStyled>
            )}
          </Container>
        )}
    </div>
  );
}

ShareButton.propTypes = {
  index: PropTypes.number.isNotRequired,
  item: PropTypes.any,
}.isRequired;
