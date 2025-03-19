import { useEffect, useState, useReducer } from 'react';

import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Reducer to manage the count state
  const countReducer = (state, action) => {
    switch (action.type) {
      case '+':
        return { count: state.count + 1 };
      case '-':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  useEffect(() => {
    // Fetch API
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Store data in state
        setLoading(false); // Change loading state when data is fetched
      })
      .catch((err) => {
        console.error('Error fetching data: ', err);
        setLoading(false); // If error, stop loading
      });
  }, []); // Empty dependency array to run effect only once on mount

  // useReducer to manage count state
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  function handleAdd() {
    dispatch({ type: '+' });
  }

  function handleSubtract() {
    dispatch({ type: '-' });
  }

  return (
    <>
      <div>
        <p>{state.count}</p>
        <br />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
      </div>

      <div>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.id}>
                  <h5>{post.title}</h5>
                  <p>{post.body}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
