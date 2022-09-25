import useFetch from './useFetch';
import BlogList from './BlogList';

/* JSON Server: is a package which allow us 
to build a fake REST-API by just using JSON files 
*/
const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
 
    return (
        <div className="home">
         { error && <div>{ error }</div> }
         { isPending && <div>Loading...</div> }
         {blogs && <BlogList blogs={blogs} title="All Blogs" />}
         {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='ZikaZaki')} title="ZikaZaki's Blogs" /> */}
        </div>
    );
}
 
export default Home;