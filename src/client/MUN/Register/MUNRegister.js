import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Button,
  InputAdornment
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: "3em",
    width: "20rem",
    height: "4rem",
    color: "#fff",
    fontSize: "1.4rem",
    "@media (max-width:780px)": {
      width: "14rem",
      height: "5rem",
      fontSize: "1.3rem"
    }
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const country = [
  "Russia",
  "USA",
  "UK",
  "China",
  "India",
  "Pakistan",
  "Swaden",
  "Denmark",
  "Germany",
  "Madagascar",
  "Indonesia",
  "Mexico",
  "Brazil",
  "Malaysia"
];

export default function MUNRegister() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [firstCountry, setFirstCountry] = useState(null);
  const [secondCountry, setSecondCountry] = useState(null);
  const [thirdCountry, setThirdCountry] = useState(null);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    college: "",
    university: "",
    city: "",
    state: "",
    course: "",
    portfolioLink: "",
    pastExp: "",
    themeQues: "",
    aboutSummit: ""
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    console.log("dob:", selectedDate);
    console.log("countries", firstCountry, secondCountry, thirdCountry);
  };

  const theme = createMuiTheme({
    palette: {
      primary: { 500: "#00a650" }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Register Here
      </Button>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        scroll="paper"
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{ textAlign: "center" }}
      >
        <DialogTitle id="form-dialog-title">
          Register for Social Summit MUN'20
        </DialogTitle>
        <DialogContent>
          <Grid container justify="center">
            <Grid item xs={12} alignContent="center" container justify="center">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3} justify="center">
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="firstName"
                      label="First Name"
                      type="text"
                      fullWidth
                      value={values.firstName}
                      onChange={handleChange("firstName")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="lasttName"
                      label="Last Name"
                      type="text"
                      fullWidth
                      value={values.lastName}
                      onChange={handleChange("lastName")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="email"
                      label="Email Address"
                      type="email"
                      fullWidth
                      value={values.email}
                      onChange={handleChange("email")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      type="number"
                      inputProps={{ maxLength: 10, minLength: 10 }}
                      label="Enter Phone Number"
                      id="phoneNumber"
                      variant="outlined"
                      fullWidth
                      value={values.phoneNumber}
                      onChange={handleChange("phoneNumber")}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="college"
                      label="College"
                      type="text"
                      fullWidth
                      value={values.college}
                      onChange={handleChange("college")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      id="university"
                      label="University"
                      type="text"
                      fullWidth
                      value={values.university}
                      onChange={handleChange("university")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="city"
                      label="City"
                      type="text"
                      fullWidth
                      value={values.city}
                      onChange={handleChange("city")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="state"
                      label="State"
                      type="text"
                      fullWidth
                      value={values.state}
                      onChange={handleChange("state")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="course"
                      label="Course"
                      type="text"
                      fullWidth
                      value={values.course}
                      onChange={handleChange("course")}
                    />
                  </Grid>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={12} md={6}>
                      <KeyboardDatePicker
                        autoOk
                        required
                        variant="outlined"
                        inputVariant="outlined"
                        fullWidth
                        format="MM/dd/yyyy"
                        id="dob"
                        label="Date of Birth"
                        value={selectedDate}
                        onChange={date => handleDateChange(date)}
                        KeyboardButtonProps={{
                          "aria-label": "change date"
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                  <Grid item xs={12} md={4}>
                    <Autocomplete
                      id="select-first"
                      options={country}
                      getOptionLabel={option => option}
                      value={firstCountry}
                      onChange={(event, newValue) => {
                        setFirstCountry(newValue);
                      }}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Country Preference 1"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Autocomplete
                      id="select-second"
                      options={country}
                      getOptionLabel={option => option}
                      value={secondCountry}
                      onChange={(event, newValue) => {
                        setSecondCountry(newValue);
                      }}
                      renderInput={params => (
                        <TextField
                          {...params}
                          required
                          label="Country Preference 2"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Autocomplete
                      id="select-third"
                      options={country}
                      getOptionLabel={option => option}
                      value={thirdCountry}
                      onChange={(event, newValue) => {
                        setThirdCountry(newValue);
                      }}
                      renderInput={params => (
                        <TextField
                          required
                          {...params}
                          label="Country Preference 3"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextField
                      required
                      variant="outlined"
                      id="portfolio-link"
                      label="Portfolio Link"
                      type="text"
                      fullWidth
                      value={values.portfolioLink}
                      onChange={handleChange("portfolioLink")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      variant="outlined"
                      id="past-exp"
                      label="Previous MUN Conferences Experience(100 words)"
                      type="text"
                      multiline
                      rows="2"
                      fullWidth
                      value={values.pastExp}
                      onChange={handleChange("pastExp")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      id="theme-question"
                      label="What are your views on the depletion of environment caused in the past few decades due to the revolutionary growth in technology?(250 words)"
                      type="text"
                      multiline
                      rows="2"
                      fullWidth
                      value={values.themeQues}
                      onChange={handleChange("themeQues")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      id="about-summit"
                      label="How did you get to know about Social Summit MUN?"
                      type="text"
                      multiline
                      rows="2"
                      fullWidth
                      value={values.aboutSummit}
                      onChange={handleChange("aboutSummit")}
                    />
                  </Grid>

                  <Grid container justify="center">
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
