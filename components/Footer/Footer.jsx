import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.conFlex1}>
            <p>Home</p>
            <p>About</p>
            <p>Membership</p>
            <p>FAQ</p>
            <p>Submissions</p>
            <p>Privacy Policy</p>
            <p>Privacy Notice for California Users</p>
            <p>Press</p>
            <p>RSS Feed</p>
            <p>Opt-out preferences</p>
        </div>
        <div className={style.specialFlex}>
            <p>Part of the</p>
          <span className={style.specialWord}>AUTOMATTIC</span>
          <p>family</p>
        </div>
        <div className={style.conFlex}>
            <p>© 2024 Longreads</p>
            <p>Made by GulistanSaglam</p>
        </div>

    </div>
  )
}

export default Footer