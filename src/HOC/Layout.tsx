import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { FC } from 'React';

export default function Layout (Page: FC) {
    return () => (
        <div className="mt-16">
            <Header />
            <Page />
            <Footer />
        </div>
    )
}
