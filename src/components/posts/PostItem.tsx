import { Post } from '../../types';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <tr>
      <th scope='row'>{post.id}</th>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </tr>
  );
};

export default PostItem;
