import { Fragment, useState } from "react";
import { useCreatePostMutation } from "../../store/slices/post";
import Alert from "../common/Alert";

interface PostListProps {
  onClick: () => void;
}

const PostForm = ({ onClick }: PostListProps) => {
  const [createPost, { isLoading, error }] = useCreatePostMutation();
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const { title, body } = post;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createPost({ ...post, userId: 1 }).unwrap();
    onClick();
  };

  return (
    <Fragment>
      {error && (
        <Alert
          alertType="danger"
          text="Error while creating post. Please try again!"
        />
      )}
      <div className="container centered-form">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="title"
                  placeholder="Enter post title"
                  required
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Description</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="body"
                  placeholder="Enter post description"
                  required
                  name="body"
                  value={body}
                  onChange={handleChange}
                />
              </div>
              <div className="container mt-4">
                <div className="row">
                  <div className="col">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="btn btn-dark mt-3"
                    >
                      {isLoading ? "Creating..." : "Add Post"}
                    </button>
                  </div>
                  <div className="col text-right">
                    <button
                      onClick={onClick}
                      type="submit"
                      className="btn btn-secondary mt-3"
                      id="back-btn"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PostForm;
