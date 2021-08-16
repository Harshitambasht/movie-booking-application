import './Header.css';
import React, { useState } from 'react';
import logo from './../logo.svg';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import FormControl from "@material-ui/core/FormControl";
import { Tab, Tabs, TextField } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Header() {

  const theme = useTheme();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [login, setLogin] = useState(false);

  function changeState() {
    setLogin(!login)
  };
  const [state, setState] = useState(false);

  const onButtonClickHandler = () => {
    setState({ showMessage: true });
  };
  return (
    <div className="header">
      <img src={logo} className="svg" alt="logo" />
      <Button variant="contained" style={{ color: "black" }} onClick={openModal} >
        {login ? "Log Out" : " Login "}</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant="fullWidth"

          aria-label="full width tabs example"
        >
          <Tab label="Login" {...a11yProps(0)} style={{ color: "black" }} />
          <Tab label="Register" {...a11yProps(1)} style={{ color: "black" }} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <FormControl noValidate autoComplete="off">

                <TextField id="standard-basic" label="Username" required/>
                <br />

                <TextField id="standard-basic" label="Password" required/>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="contained" color="primary" onClick={changeState}>
                    Login
                  </Button></div>
              </FormControl>
            </TabPanel>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TabPanel value={value} index={1} dir={theme.direction} >

              <ValidatorForm >

                <TextValidator
                required
                  label="First Name"
                  type="text"
                  validators={["required"]}
                  errorMessages={["required"]}
                /><br />
                <TextValidator
                required
                  label="Last Name"
                  type="text"
                  validators={["required"]}
                  errorMessages={['required']}
                /><br />
                <TextValidator
                required
                  label="Email"
                  type="email"
                  validators={['required', "isEmail"]}
                  errorMessages={['required']}
                /><br />
                <TextValidator
                required
                  label="Password"
                  type="password"
                  validators={['required']}
                  errorMessages={['required']}
                /><br />
                <TextValidator
                required
                  label="Contact No."
                  type="number"
                  validators={['required']}
                  errorMessages={['required']}
                /><br/>
                <br />
                {state.showMessage && <p>Registration Successful. Please Login!</p>}
                <div style={{ display: "flex", justifyContent: "center" }}>

                  <Button type="submit" variant="contained" color="primary" onClick={onButtonClickHandler} >
                    Register
                  </Button>
                </div>
              </ValidatorForm>


            </TabPanel>
          </div>
        </SwipeableViews>
      </Modal>
    </div>
  );
}



//
