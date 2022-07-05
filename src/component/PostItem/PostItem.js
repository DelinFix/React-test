import React from "react"

import {useNavigate} from 'react-router-dom'

import MyButton from "../UI/button/MyButton"

import styles from './PostItem.module.css'

const PostItem = ( props ) => {
    const { remove, post } = props
    const navigate = useNavigate()

    return(
        <div className={styles.post}>
            <div>
                <p className={styles.post__title}>
                    {post.id}.
                    <span className={styles.post__title_text}>
                        {post.title}
                    </span>
                </p>
                <div className={styles.post__content}>
                    {post.body}
                </div>
            </div>
            <div className={styles.post__btns}>
                <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
                    Open
                </MyButton>
                <MyButton onClick={() => remove(post)} warning={true}>
                    Delete
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem