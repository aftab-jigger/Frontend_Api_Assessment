import { Fragment } from "react";
import { useGetPostsQuery } from "../../store/slices/post";

import Table from "../common/Table";
import PostItem from "./PostItem";
import Alert from "../common/Alert";
import Spinner from "../common/Spinner";

interface PostListProps {
  onClick: () => void;
}

const PostList = ({ onClick }: PostListProps) => {
  const { data: posts, isLoading, error } = useGetPostsQuery({});

  if (error && !isLoading) {
    return <Alert text="Failed to get the posts" alertType="danger" />;
  }

  if (posts?.length === 0 && !isLoading) {
    return <Alert text="No Posts Found" />;
  }

  if (isLoading) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mb-3">Your Posts</h2>
        <button onClick={onClick} type="button" className="btn btn-dark">
          + Add Post
        </button>
      </div>
      <Table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default PostList;
