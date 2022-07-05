import React, {useEffect, useRef, useState} from "react"
import PostService from "../../API/PostService"

import MyButton from "../../component/UI/button/MyButton"
import MyModal from "../../component/UI/MyModal/MyModal"
import Loader from "../../component/UI/Loader/Loader"

import PostForm from "../../component/PostForm"
import Sort from "../../component/Sort/Sort"
import Find from "../../component/Find"
import PostList from "../../component/PostList/PostList"
import Limit from "../../component/Limit/Limit"

import {useFetching} from "../../hooks/useFetching"
import {usePosts} from "../../hooks/usePosts"
import {useObserver} from "../../hooks/useObserver"

import styles from './Posts.module.css'

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query:''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    // Fetching all posts with limit and page option
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit,page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers["x-total-count"]
        setTotalPages(Math.ceil(totalCount / limit))
    })

    // When you reach the last post it loads more
    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page+1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    // To old post add a new one
    const createPost = (newPost) => {
        setPosts([newPost, ...posts])
        setModal(false)
    }

    // Delete post by id
    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    return (
        <div className={styles.App}>
            <MyButton onClick={() => {setModal(true)}}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr className={styles.line}/>
            <Find filter={filter} setFilter={setFilter}/>
            <div>
                <Sort filter={filter} setFilter={setFilter}/>
                <Limit limit={limit} setLimit={setLimit}/>
            </div>
            {postError &&
                <h1>Error ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list 1"/>
            <div ref={lastElement}/>
            {isPostsLoading &&
              <div className={styles.loaderWrapper}>
                  <Loader/>
              </div>
            }
        </div>
    )
}

export default Posts
