 "use client"

import Link from 'next/link'
import '../../../styles/globals.scss'
import styles from './Menu.module.scss'
import { useState } from 'react'

export default function Menu() {

  const [position, setPosition] = useState({top: 50, left: 0, width: 0})  

  const handleMouseHover = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const parent = document.querySelector(`.${styles['main-menu']}`) as HTMLElement;

    if(target.classList.contains(styles['item'])){
      const rect = target.getBoundingClientRect()
      const parentRect = parent.getBoundingClientRect()

      setPosition({
        top: rect.top,
        left: rect.left - parentRect.left,
        width: rect.width
      })
    }
  }
  
  const handleMouseBlur = () => {
    setPosition({
      top: 50,
      left: 0,
      width: 0
    })
  }

  const underlineStyle = {
    top: `${position.top}px`,
    left: `${position.left}px`,
    width: `${position.width}px`
  }

  return (
      <ul className={styles['main-menu']}>
        
        <div className={styles.underline} style={underlineStyle}></div>
        <li className={styles['item']} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseBlur}>
          <div className={styles['item__name']}>회사소개</div>
          <div className={styles['item__contents']}>
            <ul>
              <li><Link href='/ceo' className={`link ${styles['content']}`}>CEO 인사말</Link></li>
            </ul>
          </div>
        </li>

        <li className={styles['item']} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseBlur}>
          <div className={styles['item__name']}>사업소개</div>
          <div className={styles['item__contents']}>
            <ul>
              <li><Link href='/management' className={`link ${styles['content']}`}>안전관리</Link></li>
            </ul>
          </div>
        </li>
        <li className={styles['item']} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseBlur}>
          <div className={styles['item__name']}>제품정보</div>
          <div className={styles['item__contents']}>
            <ul>
              <li><Link href='/inverter' className={`link ${styles['content']}`}>인버터</Link></li>
            </ul>
          </div>
        </li>
        <li className={styles['item']} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseBlur}>
          <div className={styles['item__name']}>고객지원</div>
          <div className={styles['item__contents']}>
            <ul>
              <li><Link href='/catalog' className={`link ${styles['content']}`}>카탈로그</Link></li>
            </ul>
          </div>
        </li>
      </ul>
  )
}