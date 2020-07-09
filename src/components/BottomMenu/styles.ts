import styled, { css } from 'styled-components';

import { Home, Notifications, Email, Search } from '../../styles/icons';

interface IconProps {
  active: boolean;
}

const iconCSS = css<IconProps>`
  width: 31px;
  height: 31px;

  cursor: pointer;
  fill: ${(props) => (props.active ? 'var(--twitter)' : 'var(--gray)')};
  &:hover {
    fill: var(--twitter);
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Notifications)`
  ${iconCSS}
`;
export const BellIcon = styled(Email)`
  ${iconCSS}
`;
export const EmailIcon = styled(Search)`
  ${iconCSS}
`;
