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
    <TextInput id="firstName" name="firstName" />
  </Container>
);

export const label = () => (
  <Container>
    <TextInput id="firstName" name="firstName" label="First Name" />
  </Container>
);

export const placeholder = () => (
  <Container>
    <TextInput
      id="firstName"
      name="firstName"
      label="First Name"
      placeholder="Bob Jones"
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
      id="firstName"
      name="firstName"
      label="First Name"
      error={{ message: 'First name is required' }}
    />
  </Container>
);

export const disabled = () => (
  <Container>
    <TextInput id="firstName" name="firstName" label="First Name" disabled />
  </Container>
);
