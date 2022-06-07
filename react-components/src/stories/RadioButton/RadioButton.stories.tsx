import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { get } from 'lodash';

import RadioButton, { Option } from '../../components/Inputs/RadioButton';
import Button from '../../components/Button';

export default { title: 'Whimsical Components/Inputs/Radio Button' };

const Container = styled.div`
  width: 380px;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

export const Default = () => (
  <Container>
    <RadioButton name="size">
      <Option name="Small" value="sm" />
      <Option name="Medium" value="md" />
      <Option name="Large" value="lg" />
    </RadioButton>
  </Container>
);

export const Label = () => (
  <Container>
    <RadioButton name="size" label="Size">
      <Option name="Small" value="sm" />
      <Option name="Medium" value="md" />
      <Option name="Large" value="lg" />
    </RadioButton>
  </Container>
);

export const Sizes = () => (
  <Container>
    <RadioButton small name="size" label="Small">
      <Option name="Option 1" value="1" />
      <Option name="Option 2" value="2" />
      <Option name="Option 3" value="3" />
    </RadioButton>
    <Spacer />
    <RadioButton name="size" label="Default">
      <Option name="Option 1" value="1" />
      <Option name="Option 2" value="2" />
      <Option name="Option 3" value="3" />
    </RadioButton>
    <Spacer />
    <RadioButton large name="size" label="Large">
      <Option name="Option 1" value="1" />
      <Option name="Option 2" value="2" />
      <Option name="Option 3" value="3" />
    </RadioButton>
  </Container>
);

export const ReactHookForm = () => {
  const schema = yup.object().shape({
    // Because it's an optionGroup .typeError() is hit before .required()
    size: yup.string().typeError('Size is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioButton
          name="size"
          register={register}
          label="Size"
          error={get(errors, 'size')}
        >
          <Option name="Small" value="sm" />
          <Option name="Medium" value="md" />
          <Option name="Large" value="lg" />
        </RadioButton>
        <br />
        <Button marginT-30>Submit</Button>
      </form>
    </Container>
  );
};
