// Write your code here
import './index.css'

const LatestMatches = props => {
  const {latestMatchDetails} = props
  const formattedData = {
    competingTeam: latestMatchDetails.competing_team,
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    competingTeam,
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = formattedData
  return (
    <div className="latest-match-details-container">
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt={competingTeam} />
      <div className="left-content">
        <p>first Innings</p>
        <p>{firstInnings}</p>
        <p>Second Inning</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatches
