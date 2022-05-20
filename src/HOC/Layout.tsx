import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { FC } from 'React';

export default function Layout (Page: FC) {
    return (props: any) => (
        <div>
            <Header />
            <Page {...props} />
            <Footer />
        </div>
    )
}
