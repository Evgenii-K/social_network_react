import { Button, LinearProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../store/actions/newsActions'
import NewsPost from '../NewsPost/NewsPost'
import { selectedNews } from '../../store/selectors/newsSelector'
import { loadSelector } from '../../store/selectors/loadSelector';

export default function News () {

  const dispatch = useDispatch()
  const posts = useSelector(selectedNews)
  const loading = useSelector(loadSelector)
  const { config, data } = posts
  const randomPage = Math.round(Math.random()*10)

  return (
    <>
      <h1>Art Institute of Chicago</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(fetchNews(`https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=10`))}
      >
        Get artwork
      </Button>
      {loading ?
        <div style={{ marginTop: '16px', width: '100%' }}>
          <LinearProgress />
        </div>
        :
        data.map(post => <NewsPost post={post} key={post.id} image={`${config.iiif_url}/${post.image_id}/full/,200/0/default.jpg`} />)
      }
    </>
  )
}

// image={`${config.iiif_url}/${post.image_id}/full/400,/0/default.jpg`}