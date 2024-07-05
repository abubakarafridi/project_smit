import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const apiKey = 'a1jRQyXwgUmjRZl0GmwEK9Q7ZOrRXS9yC0ungXzRz2w';

  useEffect(()=>{
    try {
      fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
      .then(Response => Response.json())
      .then(data => {
        setImages(data)
        setLoading(false);
      })
    } catch (error) {
      console.log("found an error", error);     
      setLoading(false);
    }

  }, []);

  return (
    <>
    <div className="main-container">

      <h1>Gallery Application</h1>
      {loading && <h1>Loading-------------------------------------</h1>}
      <div className="images-container">
        {images.map(image => {
          return (
            <div key={image.id}>
              <img src={image.urls.small}/>
            </div>
          )
        })}
      </div> 
    </div>
    </>
  )
}

export default App
