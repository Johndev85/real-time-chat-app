//styles
import styles from "./App.module.css"

//components
import ChatWindow from "./components/ChatWindow/ChatWindow"
import CopyToClipboardButton from "./components/CopyToClipboardButton/CopyToClipboardButton"

const App = () => {
  return (
    <section className={styles.container}>
      <div className={styles.subConter}>
        <div className={styles.left__column}>
          <div className={styles.title}>
            <img src="/favicon.svg" alt="" />
            <h1>real Time Live chat</h1>
          </div>
          <ChatWindow />
        </div>
        <div className={styles.text__content}>
          <h2>Share the link to start chat with your friend</h2>
          <CopyToClipboardButton url="https://real-time-chat-app-production-f849.up.railway.app/" />
        </div>
      </div>
    </section>
  )
}

export default App
