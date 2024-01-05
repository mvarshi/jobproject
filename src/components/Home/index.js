// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">The Figma design</h1>

        <p className="home-description">
          A fully functional personal portfolio website as per the Figma design.
          The website should have a responsive design and be optimized for
          different devices
        </p>
        <button type="button" className="shop-now-button">
          Show projects
        </button>
      </div>
    </div>
  </>
)

export default Home
