import Image from 'next/image'
import styles from '../styles/About.module.css'

function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Excepteur velit magna enim veniam voluptate aute consequat ex reprehenderit duis eu. Proident sunt laboris nulla esse pariatur non dolore excepteur nulla Lorem amet ullamco quis anim. Non
        officia anim reprehenderit amet adipisicing adipisicing minim. Ex duis eu duis laborum dolore qui esse. Do elit do deserunt nisi aliquip sint tempor anim id. Aliqua occaecat proident duis anim
        ea ut nisi deserunt irure do mollit ex occaecat. Nisi tempor amet nisi duis elit tempor.
      </p>
      <Image src={`/image/charizard.png`} width={`300`} height={`300`} alt="Charizard" />
    </div>
  )
}

export default About
