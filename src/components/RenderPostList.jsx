import { mockPosts } from '../data/mockData'
import { Link } from 'react-router-dom'

const RenderPostList = () => {
  return (
    <div className='max-w-7xl mx-auto m-4'>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4">
        {mockPosts.map((post) => (
          <Link key={post._id} to={`/post/${post._id}`} className="block">
            <img
              className="rounded-3xl sm:rounded-2xl w-full h-48 object-cover"
              src={post.img}
              alt={post.title}
            />
            <h2 className="text-xl font-bold mt-2">{post.title}</h2>
            <p className="text-gray-600">{post.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RenderPostList
