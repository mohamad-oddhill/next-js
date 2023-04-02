import Link from "next/link";
import Image from "next/image";
import getStarted from '../public/get-started.jpeg';
import style from '../styles/GetStarted.module.scss';

export function GetStarted () {
    return (
        <>
            <div className={style.get__started}>
                <Image src={getStarted} />
                <div className={style.content}>
                    <h2>Become a member today</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <Link className={style.primary__btn} href={"/"}>Get started</Link>
                </div>
            </div>
        </>
    );
}

