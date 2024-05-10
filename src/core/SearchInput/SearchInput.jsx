import { useRef, useState, useEffect } from 'react';
import Icon from '../Icon'
import styles from './searchInput.module.css'

const doneTypingInterval = 240; //240 ms timeout

const SearchInput = ({ value = '', onChange, onFinish, onBlur }) => {
    const [defaultValue, setDefaultValue] = useState(value)
    let typingTimer = useRef();
    const inputRef = useRef(null)

    useEffect(() => {
        setDefaultValue(value);
    }, [value]);

    const onChangeInput = (e) => {
        setDefaultValue(e.target.value);
        if (onFinish) {
            clearTimeout(typingTimer.current);
            return (typingTimer.current = setTimeout(() => {
                onFinish(e);
            }, doneTypingInterval));
        }
        return onChange?.(e);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.root}
                onClick={(e) => {
                    e.stopPropagation()
                    inputRef.current.focus()
                }}>
                <input
                    ref={inputRef}
                    type="text"
                    value={defaultValue}
                    className={styles.input}
                    placeholder='Search min 3 char...'
                    onBlur={onBlur}
                    onChange={onChangeInput}
                />
                <Icon name='search' size={16} />
            </div>
        </div>
    )
}
export default SearchInput