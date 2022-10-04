import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

import styles from './style.module.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => (
    <div className={styles.body}>
        <Title>My React and TypeScript App!</Title>
    </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
