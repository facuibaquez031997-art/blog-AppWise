import { Link, useParams } from "react-router-dom"
import { mockPosts } from "../data/mockData"


const RenderNav = () => {
    const { category } = useParams()
    const postsByCategory = mockPosts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
    )
  return (
    <div>
      {
        postsByCategory.map((post) => (
            <Link key={post._id} to={`/post/${post._id}`}>
                <div className="flex flex-col justify-between items-center gap-8">
                    <img className="rounded-3xl w-3xl h-3xl object-cover" src={post.img} alt={post.slug}/>
                    <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
                    <p className="text-blue-500">{post.category}</p>
                    <p className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
            </Link>
        ))
      }
    </div>
  )
}

export default RenderNav
                
