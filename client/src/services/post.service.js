import API from './../utils/API'

export const PostService = {
    fetchPost
}

const POST_URL = "/posts"

function fetchPost() {
    return API.get(POST_URL)
}
