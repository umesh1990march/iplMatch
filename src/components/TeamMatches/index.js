import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import LatestMatches from '../LatestMatch'
// Write your code here

class TeamMatches extends Component {
  state = {isLoading: true, matchData: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({matchData: formattedData, isLoading: false})
  }

  render() {
    const {matchData, isLoading} = this.state
    // console.log(matchData.latestMatchDetails)
    return (
      <div className="team-result-container">
        {isLoading ? (
          <Loader type="Rings" />
        ) : (
          <div>
            <img
              src={matchData.teamBannerUrl}
              alt=""
              className="banner-image"
            />
            <p>Latest Matches</p>

            <LatestMatches latestMatchDetails={matchData.latestMatchDetails} />
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
