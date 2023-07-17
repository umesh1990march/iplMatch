// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {matchDetail} = props
  const {id, name, teamImageUrl} = matchDetail
  return (
    <Link to={`team-matches/${id}`} className="link-item">
      <li>
        <div>
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p>{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
