import Component from '../../components/Text';

export default { title: 'Text' };

function Text(props: any) {
  return (
    <div>
      <Component {...props} />
      <br />
      <br />
    </div>
  );
}

export const Sizes = () => (
  <>
    <Text xs slate>Extra Small</Text>
    <Text sm blue>Small</Text>
    <Text md indigo>Medium</Text>
    <Text lg purple>Large</Text>
    <Text xl pink>Extra Large</Text>
    <Text xxl mint>Extra Extra Large</Text>
    <Text xl3 green>Extra Large 3</Text>
    <Text xl4 brown>Extra Large 4</Text>
    <Text xl5 crimson>Extra Large 5</Text>
    <Text xl6 red>Extra Large 6</Text>
    <Text xl7 orange>Extra Large 7</Text>
    <Text xl8 yellow>Extra Large 8</Text>
  </>
);

export const kitchenSink = () => (
  <>
    <Text blue>My Text</Text>
    <Text indigo>My Text</Text>
    <Text lg bold mint bg-indigo>My Text</Text>
    <Text sm>My Text</Text>
    <Text>My Text</Text>
    <Text lg>My Text</Text>
    <Text bold>My Text</Text>
    <Text underline>My Text</Text>
    <Text italics>My Text</Text>
    <Text blue sm bold underline>
      My Text
    </Text>
    <Component tagName="p">
      This is a long paragraph of text. This is a long paragraph of text. This
      is a long paragraph of text. This is a long paragraph of text.
    </Component>
    <Component tagName="p">
      This is a long paragraph of text. This is a long paragraph of text. This
      is a long paragraph of text. This is a long paragraph of text.
    </Component>
    <Text bold purple underline>
      <p>Here is another way to handle the paragraph problem...</p>
      <p>Just put your p tag inside Text.</p>
    </Text>
    <Component bold>
      Here is some strong <Component blue>blue</Component> text.
    </Component>
  </>
);
