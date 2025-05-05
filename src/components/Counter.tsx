import { AddFilled, SubtractFilled } from '@fluentui/react-icons';
import { Button, tokens } from '@fluentui/react-components';

import styled from 'styled-components';
import { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Button
        shape="circular"
        icon={<AddFilled />}
        onClick={() => {
          setCount(count => count + 1);
        }}
      />

      {count}

      <Button
        shape="circular"
        icon={<SubtractFilled />}
        onClick={() => {
          setCount(count => count - 1);
        }}
      />
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacingHorizontalL};
`;
