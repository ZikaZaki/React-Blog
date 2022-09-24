import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'ZikaZaki', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'ZikaZaki', id: 3 }
    ]);

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
    }

    useEffect(()=>{
        console.log('use effect ran'); 
        console.log(blogs);
    });
 
    return (
        <div className="home">
         <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
         {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='ZikaZaki')} title="ZikaZaki's Blogs" /> */}
        </div>
    );
}
 
export default Home;