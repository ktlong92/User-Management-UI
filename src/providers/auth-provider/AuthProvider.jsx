import PropTypes from 'prop-types';
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ pageProps, children }) => (
  <SessionProvider session={pageProps.session}>
    {children}
  </SessionProvider>
);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pageProps: PropTypes.shape({
    session: PropTypes.shape({}),
  }).isRequired,
};

export default AuthProvider;
