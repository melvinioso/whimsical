import styled from 'styled-components';

import Component from '../../components/Text';
import theme from '../../styles/theme';

export default { title: 'Whimsical Components/Text' };

function Text(props: any) {
  return (
    <div>
      <Component {...props} />
      <br />
      <br />
    </div>
  );
}

const Container = styled.div`
  padding: 20px 20px 0 20px;
  width: 30%;
  background-color: ${theme.colors.whimsical.gray};
`;

// prettier-ignore
export const basic = () => (
  <>
    <Text>This is some text.</Text>
  </>
);

// prettier-ignore
export const Sizes = () => (
  <>
    <Text xs>Extra Small</Text>
    <Text sm>Small</Text>
    <Text md>Medium</Text>
    <Text lg>Large</Text>
    <Text xl>Extra Large</Text>
    <Text xxl>Extra Extra Large</Text>
    <Text xl3>Extra Large 3</Text>
    <Text xl4>Extra Large 4</Text>
    <Text xl5>Extra Large 5</Text>
    <Text xl6>Extra Large 6</Text>
    <Text xl7>Extra Large 7</Text>
    <Text xl8>Extra Large 8</Text>
  </>
);

// prettier-ignore
export const colors = () => (
  <>
    <Text white>White</Text>
    <Text black>Black</Text>
    <Text smoke>Smoke</Text>
    <Text gray>Gray</Text>
    <Text slate>Slate</Text>
    <Text blue>Blue</Text>
    <Text indigo>Indigo</Text>
    <Text purple>Purple</Text>
    <Text pink>Pink</Text>
    <Text mint>Mint</Text>
    <Text green>Green</Text>
    <Text brown>Brown</Text>
    <Text crimson>Crimson</Text>
    <Text red>Red</Text>
    <Text orange>Orange</Text>
    <Text yellow>Yellow</Text>
  </>
);

// prettier-ignore
export const typography = () => (
  <>
    <Text bold>This is some bold text.</Text>
    <Text italics>This is some italics text.</Text>
    <Text underline>This is some text with underline.</Text>
  </>
);

// prettier-ignore
export const tagname = () => (
  <>
    <>
      <Component tagName="p">This is a long paragraph of text. This is a long paragraph of text. This is a long paragraph of text. This is a long paragraph of text.</Component>
      <Component tagName="p">This is a long paragraph of text. This is a long paragraph of text. This is a long paragraph of text. This is a long paragraph of text.</Component>
    </>
    <>
      <Text>
        <p>Here is another way to handle the paragraph problem...</p>
        <p>Just put your p tag inside Text.</p>
      </Text>
    </>
  </>
);

// prettier-ignore
export const justification = () => (
  <Container>
    <Text left white>This is left justified text.</Text>
    <Text center white>This is centered text.</Text>
    <Text right white>This is right justified text.</Text>
  </Container>
);
