import Link from 'next/link';
import styles from './Navbar.module.css';
import Button from '../Common/Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import Dialog from '../Common/Dialog/Dialog';
import { useState } from 'react';
import Login from '../Login/Login';

const Navbar = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const toggleAuthModal = () => setShowAuthModal(!showAuthModal);

    return <nav className={styles.navbar}>
        <Link href="/" className="navbar-brand">Blogs</Link>
        <SearchBar />
        <div>
            <Button label="Log In" onClick={toggleAuthModal} />
            <Button label="Sign Up" onClick={() => alert('Signup clicked!')} variant="secondary" />
        </div>
        {showAuthModal && <Dialog onClose={toggleAuthModal}>
            <Login />
        </Dialog>
        }
    </nav>
}

export default Navbar;