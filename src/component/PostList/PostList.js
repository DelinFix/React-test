import React from 'react'

import PostItem from "../PostItem/PostItem"

import TransitionGroup from "react-transition-group/cjs/TransitionGroup"
import CSSTransition from "react-transition-group/cjs/CSSTransition"

import styles from './PostList.module.css'

const PostList = ( props ) => {
    const { posts, title, remove } = props
    
    return (
        <div>
            {posts.length < 0
                ? (<h1 className={styles.textCenter}>No posts</h1>)
                :
                (<>
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                    <TransitionGroup>
                        {posts.map(post => (
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                            >
                                <PostItem remove={remove} post={post}/>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </>)}
        </div>
    )
}

export default PostList
