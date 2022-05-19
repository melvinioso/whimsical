import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;800&display=swap"
        rel="stylesheet"
      />
      <ThemeProvider theme={theme}>{Story()}</ThemeProvider>
    </>
  ),
];
