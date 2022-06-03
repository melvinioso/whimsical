import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { get } from 'lodash';

import CheckBox, { Option } from '../../components/Inputs/CheckBox';
import Button from '../../components/Button';

export default { title: 'Whimsical Components/Inputs/CheckBox' };

const Container = styled.div`
  width: 380px;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

export const Default = () => (
  <Container>
    <CheckBox name="size">
      <Option name="Small" value="sm" />
      <Option name="Medium" value="md" />
      <Option name="Large" value="lg" />
    </CheckBox>
  </Container>
);

export const Label = () => (
  <Container>
    <CheckBox name="size" label="Size">
      <Option name="Small" value="sm" />
      <Option name="Medium" value="md" />
      <Option name="Large" value="lg" />
    </CheckBox>
  </Container>
);

export const Sizes = () => (
  <Container>
    <CheckBox small name="size" label="Small">
      <Option name="Option 1" value="1" />
      <Option name="Option 2" value="2" />
      <Option name="Option 3" value="3" />
    </CheckBox>
    <Spacer />
    <CheckBox name="size" label="Default">
      <Option name="Option 1" value="1" />
      <Option name="Option 2" value="2" />
      <Option name="Option 3" value="3" />
    </CheckBox>
    <Spacer />
    <CheckBox large name="size" label="Large">
      <Option name="Option 1" value="1" />
      <Option name="Option 2" value="2" />
      <Option name="Option 3" value="3" />
    </CheckBox>
  </Container>
);

export const reactHookForm = () => {
  const schema = yup.object().shape({
    options: yup.boolean().required(),
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
        <CheckBox
          name="options"
          register={register}
          label="Select all that apply"
          error={get(errors, 'options')}
        >
          <Option name="Option 1" value="1" />
          <Option name="Option 2" value="2" />
          <Option name="Option 3" value="3" />
        </CheckBox>
        <br />
        <Button marginT-30>Submit</Button>
      </form>
    </Container>
  );
};
