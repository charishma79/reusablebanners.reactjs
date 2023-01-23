// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="banner-heading">{headerText}</h1>
        <p className="banner-text">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
