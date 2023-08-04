import sqrt from './sqrtNM';
import {ChangeEvent, useState} from 'react';
import styled from 'styled-components';

const COLOR = 'lightyellow';
const StyledApp = styled.div`
  background-color: darkslategray;
  min-height: 100vh;
  font-size: calc(10px + 1vmin);
  color: ${COLOR};
  padding: 1.5rem;
`;

const StyledGroup = styled.div`
  horiz-align: left;
  border: ${COLOR} solid 1px;
  padding: 1.5rem;
  width: fit-content;
  line-height: 2;
`;

function App() {
  const [sqrtArg, setSqrtArg] = useState(2);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {currentTarget} = event;
    setSqrtArg(currentTarget.value as unknown as number);
  };

  return (
      <StyledApp>
        <h2>Demo</h2>
        <p>A simple Create React App created directly in TypeScript. We added
            styled components and a local square root typescript function.
          <ul>
            <li>React is release 18.2</li>
            <li>Styled components added v 6.0.6</li>
          </ul>
        </p>
        <StyledGroup>
          <label>
            arg:&nbsp;
            <input type="number" value={sqrtArg} onChange={handleChange}/>
          </label>
          <div>sqrt(arg) = {sqrt(sqrtArg)}</div>
        </StyledGroup>
      </StyledApp>
  );
}

export default App;
