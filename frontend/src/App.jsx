//styles
import styles from "./App.module.css"

//components
import ChatWindow from "./components/ChatWindow/ChatWindow"

const App = () => {
  return (
    <section className={styles.container}>
      <ChatWindow />
    </section>
  )
}

export default App
