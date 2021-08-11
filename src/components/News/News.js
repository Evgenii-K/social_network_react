import { useEffect } from 'react'
import { Button, LinearProgress } from '@material-ui/core'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../store/actions/newsActions'
import NewsPost from '../NewsPost/NewsPost'
import { selectedNews } from '../../store/selectors/newsSelector'
import { loadSelector } from '../../store/selectors/loadSelector';
import SimpleAlerts from '../Alert/Alert'

function News ({text}) {

  const dispatch = useDispatch()
  const posts = useSelector(selectedNews)
  const loading = useSelector(loadSelector)
  const { config, data } = posts
  const randomPage = Math.round(Math.random()*10)
  const url = `https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=10`

  useEffect(() => {
    dispatch(fetchNews(url))
  }, [])

  return (
    <>
      <h1>Art Institute of Chicago</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(fetchNews(url))}
      >
        Get some artwork
      </Button>
      {loading ?
        <div style={{ marginTop: '16px', width: '100%' }}>
          <LinearProgress />
        </div>
        : text ? 
        <SimpleAlerts text={text}/>
        : data.map(post => <NewsPost post={post} key={post.id} image={`${config.iiif_url}/${post.image_id}/full/,200/0/default.jpg`} />)
      }

    </>
  )
}

const mapStateToProps = state => ({
  text: state.warning.text
})

export default connect(mapStateToProps)(News)
