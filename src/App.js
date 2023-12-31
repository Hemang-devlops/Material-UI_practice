import React from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera} from '@mui/icons-material';
import useStyles from './styles';

const cards = [1,2,3,4,5]

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline/>
      <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera className={classes.icon}/>
        <Typography variant='h6'>
          Photo Album
        </Typography>
      </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='mn'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography align='center' variant='h5' color='textSecondary' paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus fugiat tempora nisi, maxime labore ut reiciendis aperiam totam dolorem, beatae officiis ullam nemo soluta dolores pariatur magnam. Illo, sit tenetur!
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
              {cards.map((card)=> 
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://source.unsplash.com/random'
                      title='Image title'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant='h5'>
                        Heading
                      </Typography>
                      <Typography>
                        This is media card to describe content
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='primary'>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Something here to give footer a porpose
        </Typography>
      </footer>
    </>
  )
}

export default App;