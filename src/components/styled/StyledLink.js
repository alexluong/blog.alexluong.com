import styled from 'styled-components';
import Link   from 'gatsby-link';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid currentColor;
  }
`;

export { StyledLink };