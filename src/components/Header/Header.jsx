import { useState } from 'react'
import styles from './header.module.css'
import logo from '../../assets/images/logo.png'
import logo2x from '../../assets/images/logo2x.png'
import { Link } from 'react-router-dom'
import SearchInput from '../../core/SearchInput/SearchInput'
import Menu from '../Menu'
import Icon from '../../core/Icon'

const Header = ({ setInputValue, inputValue, headerRef }) => {
    const [menuVisibility, setMenuVisibility] = useState(false)

    return (
        <div className={styles.root}
            ref={headerRef}
        >
            <div className={styles.top}>
                <div>
                    <div onClick={() => {
                        setMenuVisibility(true)
                    }}
                        className={styles.menu_btn}>
                        <Icon name={'Menu'} stroke='#000' size={26} />
                    </div>
                </div>
                <div className={styles.middle_container}>
                    <Link to={'/'}>
                        <img src={logo} srcSet={`${logo2x} 2x`} alt="logo" /></Link>
                </div>
                <SearchInput
                    value={inputValue}
                    onFinish={(e) => {
                        setInputValue(e.target.value)
                    }} />
            </div>
            <Menu menuVisibility={menuVisibility}
                setMenuVisibility={setMenuVisibility}
            />
        </div>
    )
}

export default Header