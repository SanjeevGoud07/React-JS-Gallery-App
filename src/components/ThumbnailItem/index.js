// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {Item, isActive, Clicked} = props
  const {id, thumbnailUrl, thumbnailAltText} = Item
  const ClickImg = () => {
    Clicked(id)
  }

  const NewClass = isActive ? 'active-list' : ''

  return (
    <li className={`List-Item ${NewClass}`}>
      <button type="button" className="btn" onClick={ClickImg}>
        <img src={thumbnailUrl} className="Imaged" alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
