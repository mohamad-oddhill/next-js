import Link from 'next/link';
import Image from 'next/image'
import style from '../../styles/MainMenu.module.scss';
import logo from '../../public/vercel.svg';

function MainMenu() {
    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <a href="/">
                    <Image src={logo} />
                </a>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/product">Product</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;