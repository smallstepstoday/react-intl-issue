import NxWelcome from './nx-welcome';
import logo from './logo.svg';

import { Route, Routes, Link } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { TestLibrary } from '@test/test-library';

export function App() {
  return (
    <IntlProvider locale="en">
      <NxWelcome title="test-app" />
      <div />

      <TestLibrary />


      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      {logo}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </IntlProvider>
  );
}

export default App;
