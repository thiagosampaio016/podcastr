import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
      <Header />
      </main>
      <Player />
    </div>
  )
}
//  <Component {...pageProps} />
export default MyApp
