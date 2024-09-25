import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <section className={styles['videoContainer']}>
        <video className={styles['video']} autoPlay loop muted preload='none'>
          <source src="/video.mp4" type='video/mp4'/>
          이 영상은 현재 브라우저에서 지원하지 않습니다.
        </video>
        <div className={styles['video__cover']}></div>
      </section>
    </>
  )
}
