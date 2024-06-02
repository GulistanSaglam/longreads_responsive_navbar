import React from 'react'
import style from './social.module.css'

const Social = () => {
  return (
    <div className={style.container}>
        <p>Follow Longreads {" "}</p>
        <div className={style.socialLinks}>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Tumblr</p>
             <p>Mastodon</p>
        </div>
    </div>
  )
}

export default Social