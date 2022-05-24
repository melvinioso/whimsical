import Component from '../../components/Divider';

export default { title: 'Whimsical Components/Divider' };

function Divider(props: any) {
  return (
    <div style={{ width: '50%' }}>
      <Component {...props} />
      <br />
    </div>
  );
}

export const basic = () => <Divider />;

export const dashed = () => <Divider dashed />;

export const colors = () => (
  <>
    <Divider white />
    <Divider black />
    <Divider smoke />
    <Divider gray />
    <Divider slate />
    <Divider blue />
    <Divider indigo />
    <Divider purple />
    <Divider pink />
    <Divider mint />
    <Divider green />
    <Divider brown />
    <Divider crimson />
    <Divider red />
    <Divider orange />
    <Divider yellow />
  </>
);
