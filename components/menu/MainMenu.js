import Link from 'next/link';

function MainMenu() {
    return (
        <nav>
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
            </ul>
        </nav>
    );
}

export default MainMenu;