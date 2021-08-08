import { Card, CardContent, Typography, makeStyles, CardMedia, CardActionArea } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  container: {
    display: 'flex',
    justifyContent: 'start'
  },
  media: {
    height: 200,
    width: 200,
  },
}));

export default function NewsPost ({post, image}) {
  const classes = useStyles();

  function formatingImage () {
    const size = post.dimensions.split(' ');
    const h = +size[0]
    const w = +size[2]
    let padding = Math.abs((h - w) / 2)
    if (Number.isNaN(padding)) {
      return ({
        height: 200,
        width: 200
      })
    }
    if (h > w) {
      const width = (w / h)*200
      padding = (padding / h)*200
      return ({
        height: 200,
        width,
        marginRight: padding,
        marginLeft: padding
      })
    } else {
      const height = (h / w)*200
      padding = (padding / w)*200
      return ({
        width: 200,
        height,
        marginTop: padding,
        marginBottom: padding
      })
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.container}>
        <CardMedia
          style={formatingImage ()}
          image={image}
          title={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.artist_title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}