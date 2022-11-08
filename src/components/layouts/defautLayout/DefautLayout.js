import Navbar from '../Header/Header';
import Header from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import styles from './index.module.scss';




function DefautLayout({ children }) {
    return (
        <Container fluid='xs'>
        <div className={styles.body} >
            <div >
                
                <Header />
            </div>
            <div className={styles.Navbar} >
                <Navbar />
                <div>
                    <div className={styles.children}>
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
            <div>
            </div>
        </div>
        </Container>
    );
}

export default DefautLayout;