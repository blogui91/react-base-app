import styled from 'styled-components';

export const PageContainer = styled.div.attrs(() => ({
  className: 'PageContainer',
}))`
  padding: 20px;
  display:flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
