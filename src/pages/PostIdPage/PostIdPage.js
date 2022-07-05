import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import {useFetching} from "../../hooks/useFetching"

import PostService from "../../API/PostService"

import Loader from "../../component/UI/Loader/Loader"

import styles from './PostIdPage.module.css'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    // Fetching post information by id
    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    // Fetching post comments by id
    const [fetchComments, isComLoading] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
    })

    useEffect( () => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            {post>0
            ?
                <div>
                    {isLoading
                        ? <Loader/>
                        :
                        <div>
                            <div className={styles.title}>
                                ID:{post.id}.
                                <p className={styles.title__text}>
                                    {post.title}
                                </p>
                            </div>
                            <div>
                                <p className={styles.subtitle}>
                                    {post.body}
                                </p>
                            </div>
                        </div>
                    }
                </div>
            :
                <div className={styles.title}>
                    ID:{params.id}
                </div>
            }

            <h1 className={styles.comments}>
                Comments
            </h1>
            {isComLoading
                ? <Loader/>
                :
                <div>
                    {comments.length > 0
                        ? comments.map(com =>
                            <div key={com.id} className={styles.comment}>
                                <h4>{com.email}</h4>
                                <div>{com.body}</div>
                            </div>)
                    : <h2 className={styles.comments}>No comments</h2>}
                </div>
            }
        </div>
    )
}

export default PostIdPage
