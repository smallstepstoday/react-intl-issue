import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import TestLibrary from './test-library';

describe('TestLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
    <IntlProvider locale="en">
      <TestLibrary />
    </IntlProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
