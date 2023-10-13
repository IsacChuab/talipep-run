import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Theme.module.css';
import talipepLogo from '/public/images/talipepLogo.png';
import runLogo from '/public/images/runLogo.png';

const inter = Inter({ subsets: ['latin'] })
interface Props {
    children: any;
}

const Theme: React.FC<Props> = ({children}) => {
  return (
    <>
        <div className={`${styles.mainImg}`}>
          <div className={`${styles.talipepLogo}`}>
            <Image
              src={talipepLogo}
              alt='Logo Talipep'
              width={180}
              priority
            />              
          </div>
          <div className={`${styles.bodyHome}`}>
            <div className={`${styles.runLogo}`}>
            <Image
              src={runLogo}
              alt='Logo Talipep'
              height={450}
              priority
            />              
            </div>
            <div className={`${styles.homeCheck}`}>
                {children}
            </div>
          </div>
        </div>
    </>
  )
}

export default Theme;