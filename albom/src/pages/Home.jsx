import React, { useEffect, useState } from 'react'
import axios from "axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

function Home() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const users = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
  });
  const albums = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
  });

  const [alboms, setAlboms] = useState([]);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);


  }
  const handleClose = () => setOpen(false);
  useEffect(() => {
    albums.get('/users').then((res) => {
      setPosts(res.data);
      console.log(res.data)
    });
  }, []);

  useEffect(() => {
    albums.get('/albums').then((res) => {
      setAlboms(res.data);
      console.log(res.data)
    });
  }, []);

  return (
    <>
      <Grid container spacing={6}>
        {posts.map((post) => {
          return (
            <Grid item xs={2} sm={4} md={3} key={post.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {post.id}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.name}
                  </Typography>
                  <Typography variant="body2">
                    {post.username}
                    <br />
                    {post.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={handleOpen}>Learn More</Button>
                  <Modal

                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} >
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                      </Typography>
                    </Box>
                  </Modal>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

    </>
  )
}

export default Home