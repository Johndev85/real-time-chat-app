//styles
import styles from "./App.module.css"

//components
import ChatWindow from "./components/ChatWindow/ChatWindow"
import CopyToClipboardButton from "./components/CopyToClipboardButton/CopyToClipboardButton"

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3rem"
    height="3rem"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"
    />
  </svg>
)

const App = () => {
  return (
    <section className={styles.container}>
      <div className={styles.subConter}>
        <div className={styles.left__column}>
          <div className={styles.title}>
            <Icon className={styles.icon} />
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
