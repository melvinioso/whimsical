import styled from 'styled-components';

import TextInput from '../../components/Inputs/TextInput';

export default { title: 'Whimsical Components/Inputs/Text Input' };

const Container = styled.div`
  width: 380px;
`;

const Row = styled.div`
  margin-bottom: 20px;
`;

export const normal = () => (
  <Container>
    <TextInput id="input" name="input" />
  </Container>
);

export const label = () => (
  <Container>
    <TextInput id="input" name="input" label="Input" />
  </Container>
);

export const placeholder = () => (
  <Container>
    <TextInput
      id="input"
      name="input"
      label="Input"
      placeholder="Placeholder"
    />
  </Container>
);

export const sizes = () => (
  <Container>
    <Row>
      <TextInput
        id="small"
        name="small"
        placeholder="Small"
        label="Small"
        small
      />
    </Row>
    <Row>
      <TextInput
        id="default"
        name="default"
        placeholder="Default"
        label="Default"
      />
    </Row>
    <Row>
      <TextInput
        id="large"
        name="large"
        placeholder="Large"
        label="Large"
        large
      />
    </Row>
  </Container>
);

export const error = () => (
  <Container>
    <TextInput
      id="input"
      name="input"
      label="Input"
      error={{ message: 'This is an error message' }}
    />
  </Container>
);

export const disabled = () => (
  <Container>
    <TextInput id="input" name="input" label="Input" disabled />
  </Container>
);
