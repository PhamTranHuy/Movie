import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { FC } from 'React';

export default function Layout (Page: FC) {
    return () => (
        <div>
            <Header />
            <Page />
            <Footer />
        </div>
    )
}
