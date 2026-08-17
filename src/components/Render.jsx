import { useParams } from "react-router-dom";
import { mockPosts } from "../data/mockData";

const Render = () => {
  const { id } = useParams();
  const post = mockPosts.find((p) => p._id === id);

  if (!post) return <p>Post no encontrado</p>;

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6">
      <img
        className="rounded-3xl w-2/3 h-64 object-cover"
        src={post.img}
        alt={post.title}
      />
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <div className="flex justify-between items-center gap-2">
        <p className="text-blue-500">{post.category}</p>
      <p className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
      </div>
      
      <div
        className="mt-4 prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export default Render
