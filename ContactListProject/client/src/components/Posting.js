

import { useState, useEffect } from 'react';



function ListContact() {
  const [posts, setPosts] = useState([]);

  //Added for curentContact useState


  useEffect(() => {
    fetch("http://localhost:4002/posts")
      .then((response) => response.json())
      .then((singlePost) => {
        setPosts(singlePost);
      });
  }, []);


  return (
    <div>

      <p>PLAceholder</p>
      {/* {console.log(setPosts(posts))} */}

      {posts.map((post) => {
        { console.log(post) }
        return (
          <div className='post'>

            <p>{post.Text} </p> 
            <p>{post.username} </p>
            <p>{post.time} </p>
            <br />

          </div>
        )

      }
      )}


    </div>

  );
}

export default ListContact;