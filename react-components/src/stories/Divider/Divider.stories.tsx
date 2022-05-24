import Component from '../../components/Divider';

export default { title: 'Whimsical Components/Divider' };

function Divider(props: any) {
  return (
    <div>
      <Component {...props} />
      <br />
    </div>
  );
}

// prettier-ignore
export const basic = () => (
  <>
    <Divider />
  </>
);

// prettier-ignore
export const dashed = () => (
  <>
    <Divider dashed />
  </>
);

// prettier-ignore
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
