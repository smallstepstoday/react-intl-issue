import { useIntl } from "react-intl";
/* eslint-disable-next-line */
export interface TestLibraryProps {}

export function TestLibrary(props: TestLibraryProps) {
  const intl = useIntl();
  return (
    <div>
      <h1>{intl.formatMessage(
  {
    description: 'A message', // Description should be a string literal
    defaultMessage: 'This is a test', // Message should be a string literal
  })}</h1>
    </div>
  );
}

export default TestLibrary;
