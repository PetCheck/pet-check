import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import { useForm } from 'react-hook-form';

const AddVaccine = () => {
  // "vaccine": "rabies",
  // "date": "10/12/22",
  // "expiration": "10/12/25",
  // "location": ?
  const [vaccine, setVaccine] = useState('');
  const [date, setDate] = useState('');
  const [exp, setExp] = useState('');
  const [location, setLocation] = useState('');

  const [open, setOpen] = React.useState(false);

  const handleClick = async () => {
    // const data = {
    //   vaccine,
    //   price,
    //   siteNumber,
    //   description,
    //   location: { lat: parseInt(latitude), lng: parseInt(longitude) },
    // };
    // const card = await axios.post('http://localhost:8080/cards/add', data);
    // const newCards = [...cards, card.data];
    // setCards(newCards);
    // setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button className='addNote' variant='outlined' onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Vaccine Record</DialogTitle>
        <DialogContent>
          <form className='add-vaccine-form'>
            <FormControl sx={{ m: 1, width: '25ch' }}>
              <InputLabel htmlFor='vaccineName'>Vaccine Name</InputLabel>
              <OutlinedInput
                autoComplete='off'
                id='vaccineName'
                onChange={(e) => setVaccine(e.target.value)}
                label='Vaccine Name'
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }}>
              <InputLabel htmlFor='Date'>Date</InputLabel>
              <OutlinedInput
                autoComplete='off'
                id='Date'
                onChange={(e) => setDate(e.target.value)}
                label='Date'
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }}>
              <InputLabel htmlFor='expiration'>Expiration</InputLabel>
              <OutlinedInput
                autoComplete='off'
                id='expiration'
                onChange={(e) => setExp(e.target.value)}
                label='Expiration'
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }}>
              <InputLabel htmlFor='Location'>Location</InputLabel>
              <OutlinedInput
                autoComplete='off'
                id='Location'
                onChange={(e) => setLocation(e.target.value)}
                label='Location'
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddVaccine;