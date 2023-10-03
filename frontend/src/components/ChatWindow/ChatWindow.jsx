//styles
import styles from "./chat.module.css"

//libraries
import { useEffect, useState, useRef } from "react"
import io from "socket.io-client"

const socket = io("/")

const ChatWindow = () => {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const formChat = useRef(null)
  const scrollContainerRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      body: message,
      from: "Me",
    }
    setMessages([...messages, newMessage])
    socket.emit("message", message)
    formChat.current.reset()
  }

  useEffect(() => {
    socket.on("message", (message) => {
      receiveMessage(message)
    })
    scrollContainerRef.current.scrollTop =
      scrollContainerRef.current.scrollHeight
    return () => {
      socket.off("message")
    }
  }, [message])

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message])

  return (
    <div className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.conter__messages} ref={scrollContainerRef}>
        <div className={styles.messages}>
          {messages.map((msg, index) => (
            <div
              className={
                msg.from === "Me"
                  ? styles.messages__innerInternal
                  : styles.messages__innerExternal
              }
              key={index}
            >
              <div
                className={
                  msg.from === "Me" ? styles.lineInternal : styles.lineExternal
                }
              >
                <b> {msg.from}: </b> <p> {msg.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form ref={formChat}>
        <input
          name="message"
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          autoFocus
        />
      </form>
    </div>
  )
}

export default ChatWindow
