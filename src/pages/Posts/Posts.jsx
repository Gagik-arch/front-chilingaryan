import { useState, useRef, useEffect } from 'react'
import styles from './posts.module.css'
import Header from '../../components/Header'
import PostsContainer from '../../containers/PostsContainer'

const Posts = () => {
    const [inputValue, setInputValue] = useState('')
    const headerRef = useRef()
    const translateY = useRef()
    const scrollRef = useRef()

    useEffect(() => {
        const resize = (e) => {
            translateY.current = 0
            headerRef.current.style.transform = `translateY(${-translateY.current}px)`
            scrollRef.current.style.top = -headerRef.current.clientHeight + 'px'
            scrollRef.current.scrollTo(0, 0)
        }
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }

    }, [])
    return (
        <div className={styles.root}>
            <Header headerRef={headerRef}
                setInputValue={setInputValue}
                inputValue={inputValue}
            />
            <div className={styles.container}>
                <div className={styles.scroll}
                    ref={scrollRef}
                    onScroll={(e) => {
                        if (e.target.scrollTop >= 200) {
                            translateY.current = (e.target.scrollTop - 200) - translateY.current
                        } else {
                            translateY.current = 0
                        }
                        if (translateY.current < headerRef.current.clientHeight) {
                            e.target.style.top = -translateY.current + 'px'
                        } else {
                            e.target.style.top = -headerRef.current.clientHeight + 'px'
                        }
                        headerRef.current.style.transform = `translateY(${-translateY.current}px)`
                    }}
                >
                    <PostsContainer inputValue={inputValue} />
                </div>
            </div>
        </div >
    )
}

export default Posts