import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const PostListReducer = (currPostList, action) => {

    let newPostList = currPostList;

    if (action.type == "DELETE_POST") {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    }
    else if(action.type == "ADD_POST")
    {
        newPostList = [action.payload , ...currPostList];
    }
    return newPostList;
};


const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(PostListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, userTitle, userBody, reactions, tags) => {
        console.log(`${userId}, ${userTitle}, ${userBody}, ${reactions}, ${tags}`);

        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: userTitle,
                body: userBody,
                reaction: reactions,
                userId: userId,
                tags: tags,
            }
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost, }}>
            {children}
        </PostList.Provider >
    );
};

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going To Mumbai',
        body: 'Hi Friends I am going to mumnbai and i am happy to enjoy my peace out.',
        reaction: 2,
        userId: 'user-9',
        tags: ['vacation', 'mumbai', 'enjoying']
    },
    {
        id: '2',
        title: 'I am Passed Final Year',
        body: 'Hi Friend i am passed final year succesfully so i am happy to share my reasult.',
        reaction: 15,
        userId: 'ash-9',
        tags: ['passionate', 'study', 'grades']
    },
    {
        id: '3',
        title: 'Going To Pune',
        body: 'Pune tithe kon une, tai bai aakka tumcha paksh chakka',
        reaction: 30,
        userId: 'baksri-8',
        tags: ['pune', 'politics', 'city']
    }
];



export default PostListProvider;













