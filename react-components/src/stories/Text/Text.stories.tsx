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

export const kitchenSink = () => (
  <>
    <Text blue>My Text</Text>
    <Text purple>My Text</Text>
    <Text sm>My Text</Text>
    <Text>My Text</Text>
    <Text lg>My Text</Text>
    <Text bold>My Text</Text>
    <Text underline>My Text</Text>
    <Text italics>My Text</Text>
    <Text blue sm bold underline>
      My Text
    </Text>
    <Component tagName="p">This is a long paragraph of text. This is a long paragraph of text. This is a long paragraph of text. This is a long paragraph of text.</Component>
    <Component tagName="p">This is a long paragraph of text. This is a long paragraph of text. This is a long paragraph of text. This is a long paragraph of text.</Component>
    <Text bold purple underline>
      <p>Here is another way to handle the paragraph problem...</p>
      <p>Just put your p tag inside Text.</p>
    </Text>
    <Component bold>
      Here is some strong <Component blue>blue</Component> text.
    </Component>
  </>
);
