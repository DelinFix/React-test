import React, {useEffect, useRef, useState} from "react"
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../component/utils/pages";
import MyButton from "../component/UI/button/MyButton";
import MyModal from "../component/UI/MyModal/MyModal";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import PostList from "../component/PostList";
import Loader from "../component/UI/Loader/Loader";
import Pagination from "../component/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../component/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query:''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await  PostService.getAll(limit,page)
        setPosts([...posts, ...response.data])
        const  totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page+1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => {setModal(true)}}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Number of posts"
                options={[
                    {value:5, name:'5'},
                    {value:10, name:'10'},
                    {value:25, name:'25'},
                    {value:-1, name:'All'}
                ]}
            />
            {postError &&
            <h1>Error ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list 1"/>
            <div ref={lastElement}/>
            {isPostsLoading &&
              <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
        </div>
    )
}

export default Posts
