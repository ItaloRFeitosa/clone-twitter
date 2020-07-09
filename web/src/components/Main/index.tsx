import React from 'react';

import BottomMenu from '../BottomMenu';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Italo Feitosa</strong>
          <span>42 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage/> */}

      <BottomMenu />
    </Container>
  );
};

export default Main;
