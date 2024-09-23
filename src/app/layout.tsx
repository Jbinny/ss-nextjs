import type { Metadata } from 'next'
import '../styles/globals.scss'
import styles from '../styles/layout.module.scss'
import { META } from './constants/metadata'
import Link from 'next/link'
import { Nanum_Gothic } from 'next/font/google'

const nanum = Nanum_Gothic({

  weight: ['400','700'],
  subsets: [],
  style: 'normal'
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: META.title,
  description: META.description,
  icons: {
    icon: '/icon.png',
  },
  keywords: [...META.keyword],
  openGraph: {
    title: META.title,
    description: META.description,
    siteName: META.siteName,
    locale: 'ko_KR',
    type: 'website',
    url: META.url,
    images: {
      url: META.ogImage,
    }
  },
  twitter: {
    card: 'summary',
    site: META.title,
    title: META.siteName,
    description: META.description,
    images: {
      url: META.ogImage,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body style={{'backgroundColor': '#a3a3a3'}}>
        <header className={styles.head}>
          <div className={styles.inner}>
            <Link href='/' className={styles.link}>
              <img src="/logo_white.png" className={styles.logo} alt="Logo" />
            </Link>

            <ul className={styles['main-menu']}>
              <li className={styles.item}>
                <div className="item__name">회사소개</div>
                <ul className="item__contents">
                  <li><Link href='/ceo' className='link'>CEO 인사말</Link></li>
                </ul>
              </li>
              <li className={styles.item}>
                <div className="item__name">사업소개</div>
                <ul className="item__contents">
                  <li><Link href='/management' className='link'>안전관리</Link></li>
                </ul>
              </li>
              <li className={styles.item}>
                <div className="item__name">제품정보</div>
                <ul className="item__contents">
                  <li><Link href='/inverter' className='link'>인버터</Link></li>
                </ul>
              </li>
              <li className={styles.item}>
                <div className="item__name">고객지원</div>
                <ul className="item__contents">
                  <li><Link href='/catalog' className='link'>카탈로그</Link></li>
                </ul>
              </li>
              
            </ul>
          </div>
        </header>
        {children}
        <footer>
          <div className={styles.inner}>
            <ul className="foot-menu">
              <li><Link href='#' className='link'>개인정보 처리방침</Link></li>
              <li><Link href='#' className='link'>데이터·정보 운영관리방침</Link></li>
              <li><Link href='#' className='link'>홈페이지 이용약관</Link></li>
            </ul>

            <div className="btn-group">
              <Link href='#' className={`${nanum.className} link btn btn--white`}>찾아오시는 길</Link>
              <Link href='#' className={`link btn btn--white`}>서비스 문의</Link>
              <Link href='/' className={`link btn btn--white`}>사이트 맵</Link>
            </div>

            <div className="info">
              <div className="info-logo">
                <img src="/logo_footer.png" alt="Footer Logo" />
              </div>

              <div className="info-text">
                <span>사업자등록번호 885-86-00706</span><br />
                <span>(주)에쓰에쓰컴퍼니 대표자 곽성운</span><br />
                <span>TEL : 063) 252-3901 / FAX : 063) 252-0823</span><br />
                <span>전북특별자치도 전주시 덕진구 견훤로 256 2층</span><br />
                <span>Email : sscompany063@naver.com</span>
              </div>
            </div>
            <p className="copyright">
              &copy; {new Date().getFullYear()} SS Company. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
