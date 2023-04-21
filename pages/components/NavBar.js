import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/NavBar.module.css'

function NavBar() {
    return ( <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image className="" src={`/image/pokeball.png`} width={`30`} height={`30`} alt="Pokenext"/>
            <h1>PokeNext</h1>
        </div>
        <ul className={styles.link_items}>
            <li>
                <Link href={`/`}>Home</Link>
            </li>
            <li>
                <Link href={`/about`}>About</Link>
            </li>
        </ul>
    </nav> );
}

export default NavBar;