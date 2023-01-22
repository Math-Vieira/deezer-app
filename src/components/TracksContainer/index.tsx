import * as S from './style'
import { Props } from './model'
import TrackListItem from '../TrackListItem'

const TracksContainer = ({
  tracksList,
  loading,
  error
}: Props): JSX.Element => {
  return (
    <S.Ul>
      {tracksList.map((e) => (
        <TrackListItem
          key={e.id}
          title={e.title}
          artistName={e.artist.name}
          albumCover={e.album.cover_medium}
          duration={e.duration}
          link={e.link}
          fullTrackInfo={e}
        />
      ))}
    </S.Ul>
  )
}

export default TracksContainer
