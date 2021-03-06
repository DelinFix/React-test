import React, {useState} from 'react'

import MyInput from "./UI/input/MyInput"
import MyButton from "./UI/button/MyButton"

const PostForm = ( {create} ) => {
    const [post, setPost] = useState({title: '', body: ''})

    //Calls the create post function with title, body and id
    const addNewPost = (e) => {
        e.preventDefault()
        create( {...post, id: Date.now()} )
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange = {e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Title"
            />
            <MyInput
                value={post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Description"
            />
            <MyButton onClick={addNewPost}>
                Create post
            </MyButton>
        </form>
    )
}

export default PostForm
