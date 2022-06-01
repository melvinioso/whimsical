import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import TextAreaInput from '../../components/Inputs/TextAreaInput';

import theme from '../../styles/theme';

export default { title: 'Whimsical Components/Inputs/Text Area Input' };

const Container = styled.div`
  width: 380px;
`;

const Row = styled.div`
  margin-bottom: 20px;
`;

export const normal = () => (
  <Container>
    <TextAreaInput id="notes" name="notes" />
  </Container>
);

export const label = () => (
  <Container>
    <TextAreaInput id="notes" name="notes" label="Notes" />
  </Container>
);

export const placeholder = () => (
  <Container>
    <TextAreaInput id="notes" name="notes" label="Notes" placeholder="Notes" />
  </Container>
);

export const sizes = () => (
  <Container>
    <Row>
      <TextAreaInput
        id="small"
        name="small"
        placeholder="Small"
        label="Small"
        small
      />
    </Row>
    <Row>
      <TextAreaInput
        id="default"
        name="default"
        placeholder="Default"
        label="Default"
      />
    </Row>
    <Row>
      <TextAreaInput
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
    <TextAreaInput
      id="notes"
      name="notes"
      label="Notes"
      error={{ message: 'Notes are required' }}
    />
  </Container>
);

export const disabled = () => (
  <Container>
    <TextAreaInput id="notes" name="notes" label="Notes" disabled />
  </Container>
);

export const icons = () => (
  <Container>
    <Row>
      <TextAreaInput
        id="search"
        name="search"
        label="Small"
        icon={<FaSearch color={theme.colors.whimsical.red} />}
        small
      />
    </Row>
    <Row>
      <TextAreaInput
        id="search"
        name="search"
        label="Default"
        icon={<FaSearch color={theme.colors.whimsical.red} />}
      />
    </Row>
    <Row>
      <TextAreaInput
        id="search"
        name="search"
        label="Large"
        icon={<FaSearch color={theme.colors.whimsical.red} />}
        large
      />
    </Row>
    <Row>
      <TextAreaInput
        id="search"
        name="search"
        label="Small"
        icon={<FaSearch color={theme.colors.whimsical.blue} />}
        iconPosition="right"
        small
      />
    </Row>
    <Row>
      <TextAreaInput
        id="search"
        name="search"
        label="Default"
        icon={<FaSearch color={theme.colors.whimsical.blue} />}
        iconPosition="right"
      />
    </Row>
    <Row>
      <TextAreaInput
        id="search"
        name="search"
        label="Large"
        icon={<FaSearch color={theme.colors.whimsical.blue} />}
        iconPosition="right"
        large
      />
    </Row>
  </Container>
);
