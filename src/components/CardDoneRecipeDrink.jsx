import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ShareButton from './ShareButton';
import { DoneCardContainer } from '../styles/CardRecipesStyle';

const DivStyled = styled.div`
position: absolute;
  background: url(${(props) => props.image});
  filter: opacity();
  width: 100vw;
  height: 57.9vh;
  background-size: cover;
  z-index: -1;
`;

const DivContainer = styled.div`
  width: 100vw;
  height: 58vh;
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px); 
  background-color: rgba(0, 0, 0, 0.392);
  height: 58vh;
  width: 50vw;
  margin-bottom: 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  p {
    margin-bottom: 1em;
  }
`;
export default function CardDoneRecipeDrink({ recipe: { item, index } }) {
  const history = useHistory();

  return (
    <DoneCardContainer>
      <button
        className="link-done-card"
        type="button"
        onClick={ () => history.push(`/drinks/${item.id}`) }
      >
        <DivContainer>
          <DivStyled image={ item.image } />
          <DivContent>
            <h3>Category</h3>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${item.category} - ${item.alcoholicOrNot}`}
            </p>
            <h3>Recipe</h3>
            <p
              data-testid={ `${index}-horizontal-name` }
            >
              {item.name}
            </p>
            { !history.location.pathname.includes('favorite') && (
              <div>
                <h3>Date</h3>
                <p
                  data-testid={ `${index}-horizontal-done-date` }
                >
                  {item.doneDate}
                </p>
                {item.tags[0] !== null && (
                  <div>
                    <h3>Tags</h3>
                    {item.tags && item.tags.map((tagName) => (
                      <p
                        key={ tagName }
                        data-testid={ `${index}-${tagName}-horizontal-tag` }
                      >
                        {tagName}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ) }
          </DivContent>
        </DivContainer>
      </button>
      <ShareButton index={ index } item={ item } />
    </DoneCardContainer>
  );
}

CardDoneRecipeDrink.propTypes = {
  recipe: PropTypes.any,
}.isRequired;
