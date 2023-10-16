import Nav from '../Header/nav';
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <h1 className='h1-footer'>&copy; 2023 Tricia Sawyer</h1>
                <div className='nav-footer'>
                    <Nav />
                </div>
            </div>
        </>
    );
}

export default Footer;