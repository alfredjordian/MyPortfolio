import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'85vh',
  height:'85vh',
  border: '2px solid #000',
  boxShadow: 24,
  overflow: "scroll"
};


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <btn className="btn">
      <Button onClick={handleOpen}style={{fontFamily: 'inherit', fontSize: 'inherit', color: 'white'}}>Resume</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Card sx={style}>
          <CardMedia
            component="img"
            image="https://media-exp1.licdn.com/dms/image/C562DAQHe-dNLM7XKog/profile-treasury-image-shrink_1280_1280/0/1658766270485?e=1659376800&v=beta&t=_Fd4H6wK9_PRTyKnS9dMSCaGm8HihMAffrQxab2waJw"
            alt="Resume"
          />
          <CardContent>
          </CardContent>
          <CardActions style={{justifyContent:'center'}}>
            <Link href="https://www.linkedin.com/in/ian-jordan-aa6ab8207/overlay/1635497138088/single-media-viewer/" target="_blank" rel="noreferrer">
            <Button size="small" variant="contained" color="success" >Visit</Button>
            </Link>
          </CardActions>
          </Card>
      </Modal>
    </btn>
  );
}
