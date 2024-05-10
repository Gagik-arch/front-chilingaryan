import React from 'react';
import styles from './postCard.module.css'

const PostCard = ({ post, onClick }) => {

    return (
        <div className={styles.root}
            onClick={onClick}>
            <div>
                <img src={post.img} srcSet={`${post.img_2x} 2x`} alt="logo" />
            </div>
            <div className={styles.tag}>{post.tags}</div>
            <div className={styles.title}>
                {post.title}
            </div>
            <div className={styles.row}>
                <span className={styles.autor}>{post.autor}</span>
                •
                <span className={styles.date}>{post.date}</span>
                •
                <span className={styles.views}>{post.views}</span>
            </div>
            <div className={styles.text}>
                {post.text}
            </div>
        </div>
    )
}

export default PostCard