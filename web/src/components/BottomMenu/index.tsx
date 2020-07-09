import React, { useState } from 'react';

import { Container, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

interface ActiveProps {
  home: boolean;
  search: boolean;
  bell: boolean;
  email: boolean;
}

const BottomMenu: React.FC = () => {
  const [actived, setActived] = useState({
    home: true,
    search: false,
    bell: false,
    email: false,
  });

  const removeAttribute = (prop: string) => ({ [prop]: _, ...rest }) => rest;

  function handleClick(prop: string) {
    const rest = removeAttribute(prop)(actived);
    Object.keys(rest).forEach((key) => (rest[key] = false));
    setActived({ [prop]: true, ...rest } as ActiveProps);
  }

  return (
    <Container>
      <HomeIcon active={actived.home} onClick={() => handleClick('home')} />
      <SearchIcon
        active={actived.search}
        onClick={() => handleClick('search')}
      />
      <BellIcon active={actived.bell} onClick={() => handleClick('bell')} />
      <EmailIcon active={actived.email} onClick={() => handleClick('email')} />
    </Container>
  );
};

export default BottomMenu;
