import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-template-rows: minmax(10%, min-content) auto minmax(10%, min-content);

  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 16px #00000042;

  border-radius: 0.5rem;
  overflow: hidden;
`;

export default Main;