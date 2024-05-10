import React from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css'
import Icon from '../Icon';

const Modal = ({
    children,
    isVisible = false,
    close
}) => {

    return (
        <>
            {isVisible &&
                createPortal(
                    <div className={styles.root}
                        onClick={close}>
                        <div className={`${styles.block}`}
                            onClick={e => {
                                e.stopPropagation()
                            }}>
                            {children}
                            <span className={styles.close_icon}
                                onClick={() => {
                                    close?.()
                                }}
                            >
                                <Icon name='X' size={12} />
                            </span>
                        </div>
                    </div>,
                    document.getElementById('root')
                )
            }
        </>

    )
};

export default Modal;