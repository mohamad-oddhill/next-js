import Header from './region/header';
import Footer from "pages/components/region/footer";

function Layout({ children }) {
    return (
        <div className="main-content">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;