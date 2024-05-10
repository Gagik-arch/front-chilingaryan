import { useState } from 'react';
import { menuData } from './staticData';
import styles from './menu.module.css';
import Icon from '../../core/Icon';
import logo from '../../assets/images/logo.png';

const Menu = ({
    menuVisibility,
    setMenuVisibility
}) => {

    return (
        <div
            className={`${styles['root']} ${styles['root' + (menuVisibility ? '__visible' : '')]}`}
            onClick={() => {
                setMenuVisibility(false)
            }}
        >
            <div className={`${styles.menu_container}`}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal_menu_header}>
                    <img src={logo} alt="" />
                    <span onClick={() => {
                        setMenuVisibility(false)
                    }}>
                        <Icon name={'X'} size={26} />
                    </span>
                </div>
                {
                    menuData.map(item => {
                        return (
                            <div key={item.title}
                                className={styles.menu_item}
                            >
                                {item.title}
                                {item.hasOwnProperty('children') &&
                                    <>
                                        <Icon name='ChevronDown'
                                            stroke={'#000'}
                                        />
                                        <div className={styles.subitem_container}>
                                            {item.children.map(subitem => {
                                                return (
                                                    <div key={subitem.title}
                                                        className={styles.subitem}
                                                    >
                                                        {subitem.title}
                                                        <Icon name={'ChevronRight'}
                                                            stroke={'#000'}
                                                            size={14}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </>}

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu