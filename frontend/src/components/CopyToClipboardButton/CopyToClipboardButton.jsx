import styles from "./ClipboardButton.module.css"

import { useRef, useState } from "react"

// eslint-disable-next-line react/prop-types
const CopyToClipboardButton = ({ url }) => {
  const textAreaRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch (err) {
      console.error("Error al copiar el texto: ", err)
    }
  }

  return (
    <div>
      <textarea
        ref={textAreaRef}
        // hidden text area.
        style={{ position: "absolute", left: "-9999px" }}
        defaultValue={url}
        readOnly
      />
      <div className={styles.container}>
        <button className={styles.link} onClick={copyToClipboard}>
          copy Clipboard
        </button>
        {copied && (
          <span className={styles.copiedMessage}>
            Link copied to clipboard!
          </span>
        )}
      </div>
    </div>
  )
}

export default CopyToClipboardButton
