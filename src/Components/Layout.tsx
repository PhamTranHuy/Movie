import Footer from './Footer/Footer';
import Header from './Header/Header';

type props = {
    children: React.ReactNode
}

export default function Layout ({ children }: props) {
  return (
    <div>
        <Header />
      {children}
      <Footer />
    </div>
  );
}
