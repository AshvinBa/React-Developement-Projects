import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

    const {addPost} = useContext(PostList);

    const userIdElement = useRef();
    const userTitleElement = useRef();
    const userBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const userTitle = userTitleElement.current.value;
        const userBody = userBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        userIdElement.current.value=" ";
        userTitleElement.current.value=" ";
        userBodyElement.current.value=" ";
        reactionsElement.current.value=" ";
        tagsElement.current.value=" ";
        
        addPost(userId , userTitle , userBody , reactions , tags);
    };

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            
            <div className="mb-3">
                <label htmlFor="userId" className="form-label"> Enter your User ID: </label>
                <input type="text" ref={userIdElement}  className="form-control" id="userId" placeholder="Your User Id..." />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label"> Post Content </label>
                <textarea type="body" ref={userTitleElement} rows="5" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tell us more about it..." />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={userBodyElement} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How are you feeling today..." />
            </div>

            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of Reactions</label>
                <input type="text" ref={reactionsElement} className="form-control" id="reaction" aria-describedby="emailHelp" placeholder="How many people reacted to this..." />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter Your hashtags here.</label>
                <input type="text" ref={tagsElement} className="form-control" id="tags" aria-describedby="emailHelp" placeholder="Please enter tags using space..." />
            </div> 
            
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    );
}

export default CreatePost;