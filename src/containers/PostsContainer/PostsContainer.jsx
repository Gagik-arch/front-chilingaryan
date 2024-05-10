import { useState, useEffect } from 'react';
import styles from './postsContainer.module.css'
import postApi from '../../services/postsApi';
import PostCard from '../../components/PostCard';
import { filterPosts } from './utils'
import Modal from '../../core/Modal';

const PostsContainer = ({ inputValue }) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        postApi.getPosts()
            .then((res) => {
                setPosts(res);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [])

    const onClickPost = (post) => {
        setSelectedPost(post)
    }


    const filteredPosts = inputValue.length > 1 ? filterPosts(posts, inputValue) : posts

    return (
        <div className={styles.root}>
            {isLoading ? <div>Loading...</div> :
                filteredPosts.length ? filteredPosts.map((post, index) => {
                    return (
                        <PostCard key={index} post={post} onClick={() => onClickPost(post)} />
                    )
                }) : <div>Posts not available</div>
            }
            <Modal isVisible={!!selectedPost}
                close={() => {
                    setSelectedPost(null)
                }}
            >
                <>
                    <h1 className={styles.modal_header}>{selectedPost?.title}</h1>
                    <div className={styles.row}>
                        <img src={selectedPost?.img} srcSet={`${selectedPost?.img_2x} 2x`} alt="logo" />
                        <div>
                            {selectedPost?.text}
                        </div>
                    </div>
                    <div className={styles.optional_info}>
                        <div className={styles.tag}>
                            {selectedPost?.tags}
                        </div>
                        <div className={styles.group}>
                            <span className={styles.autor}>{selectedPost?.autor}</span>
                            •
                            <span className={styles.date}>{selectedPost?.date}</span>
                            •
                            <span className={styles.views}>{selectedPost?.views}</span>
                        </div>
                    </div>
                </>
            </Modal>
        </div>
    )
}

export default PostsContainer
