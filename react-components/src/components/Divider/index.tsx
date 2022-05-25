import styled from 'styled-components';
import clsx from 'clsx';

import theme from '../../styles/theme';

function _Divider({ className, dashed }: any) {
  return (
    <div className={clsx(className, dashed && 'dashed')}>
      <hr />
    </div>
  );
}

const Divider = styled(_Divider)`
  ${(props) => {
    let color;

    Object.keys(props.theme.colors.whimsical).forEach((key) => {
      if (props[key]) {
        color = props.theme.colors.whimsical[key];
      }
    });

    if (color) {
      return `
        hr {
          border-top: 3px solid ${color};
        }
      
        &.dashed {
          hr {
            border-top: 3px dashed ${color};
          }
        }
      `;
    } else {
      return `
        hr {
          border-top: 3px solid ${theme.colors.whimsical.gray};
        }
      
        &.dashed {
          hr {
            border-top: 3px dashed ${theme.colors.whimsical.gray};
          }
        }
      `;
    }
  }}
`;

export default Divider;
