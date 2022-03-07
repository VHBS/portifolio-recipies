import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import BackButton from '../components/BackButton';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

const ContainerContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;

  .email-container{
    width: 70vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 5em;
    text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);


    span {
      margin: 0 1em;
      text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);
    }
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.5em;
    box-shadow: 0.1em 0.1em 1.5px rgba(0, 0, 0, 0.5);
    padding: 0.75em;
    width: 50vw;
    margin: 1em 0;
  }
`;

export default function ProfilePage() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const saveEmail = JSON.parse(localStorage.getItem('user')).email;
      setEmail(saveEmail);
    }
  }, []);

  const redirectToFavorites = () => {
    history.push('/favorite-recipes');
  };

  const redirectToDone = () => {
    history.push('/done-recipes');
  };

  const redirectToLogin = () => {
    history.push('/');
    localStorage.clear();
  };

  return (
    <div>
      <Header title="Profile" />
      <BackButton />
      <ContainerContentProfile>
        <div className="email-container">
          <span><AiOutlineMail /></span>
          <span data-testid="profile-email">
            {email}
          </span>
        </div>
        <ContainerButtons>
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={ redirectToDone }
          >
            Done Recipes
          </button>
          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ redirectToFavorites }
          >
            Favorite Recipes
          </button>
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ redirectToLogin }
          >
            Logout
          </button>
        </ContainerButtons>
      </ContainerContentProfile>
      <FooterMenu />
    </div>
  );
}

// teste
