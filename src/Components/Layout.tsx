import PropTypes from 'prop-types';
import Header from './Header/Header';

type props = {
    children: React.ReactNode
}

export default function Layout ({ children }: props) {
  return (
    <div>
        <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
    children: PropTypes.elementType
};
