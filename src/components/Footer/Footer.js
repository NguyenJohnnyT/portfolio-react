import React from "react";
import "../pages/style.css"
const styles = {
  footer: {
    backgroundColor: "cornsilk"
  }
}

export default function Footer () {
  return (
    <footer style={styles.footer} className="footer">
      <div className='container'>
        <span className="text-muted"> Johnny Nguyen 2021</span>
      </div>
    </footer>
  )
}