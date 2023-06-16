import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import CardHeader from "@material-ui/core/CardHeader";
import { NotificationData } from "./FormTemplates";
import styles from "./styles.js";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";

import Paper from "@material-ui/core/Paper";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

import { Theme, useTheme } from "@material-ui/core/styles";
import { useRef, useState } from "react";
import { TagsInput } from "react-tag-input-component";

// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import { SelectChangeEvent } from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
// import { withOktaAuth } from "@okta/okta-react";
import { IconButton, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Origin from "../../src/Assets/origin.png";
// import Destination from "../../src/Assets/destination.png";
import { makeStyles } from "@material-ui/core/styles";
import { Cancel, Tag } from "@mui/icons-material";

import { Stack } from "@mui/material";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import Box from "@material-ui/core/Box";
import { DateTimePicker } from "@material-ui/pickers";
import { TextField, Button } from "@material-ui/core";
import Header from "./header.js";

// import { , useTheme } from '@mui/material/styles';
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const useStyles = makeStyles((theme) => ({
  formdiv: {
    width: "50rem",
    maxHeight: "92vh",
    marginTop: "4rem",
    margin: "auto",
    paddingTop: "2em",
    paddingbottom: "4rem",
    overflowY: "auto",
    fontFamily: "Poppins",
  },
  FormControl: {
    display: "flex",
    fontFamily: "Poppins",
  },
  text: {
    fontFamily: "Poppins",
    textAlign: "initial",
  },
  formRoot: {
    overflowX: "hidden",
    fontFamily: "Poppins",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1),
    },
    "& .MuiFormControl-root": {
      marginBottom: theme.spacing(1),
    },
  },
  title: {
    display: "flex",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: " #212529",
    backgroundColor: " #fff",
    // backgroundClip: "paddinBbox",
    border: "1px solid #ced4da",
    borderRadius: "0.25rem",
  },
  "react-tag-input__input": {
    color: "white",
    fontFamily: "Poppins",
  },
  input: {
    border: "none",
    width: "100%",
    fontFamily: "Poppins",
    fontSize: "inherit",
  },
  formgroup: {
    display: "flex",
    fontFamily: "Poppins",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    margin: "2rem auto",
  },
  MuiInputBase: {
    display: "flex !important",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit / 2,
    top: theme.spacing.unit / 2,
    color: theme.palette.grey[500],
  },
  gridList: {
    width: "100%",
    maxHeight: 300,
  },
  conatainer: {
    minHeight: "84vh",
    maxHeight: "100%",
  },
  scrollabletextbox: {
    height: "40rem",
    //width:200px;
    //font-family: Verdana, Tahoma, Arial, Helvetica, sans-serif;
    //font-size: 82%;
    overflow: "scroll",
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const destinationData = [
  {
    id: 905,

    label: "Home",

    destination: "EmployeeAppHomeView",

    section: "Home",
  },

  {
    id: 906,

    label: "Give Us Feedback",

    destination: "https://ncv.microsoft.com/BqLtILsqwk",

    section: "Home",
  },

  {
    id: 907,

    label: "Contact a Technician",

    destination: "ContactTechView",

    section: "24/7 Program",
  },

  {
    id: 908,

    label: "Equipment Menu",

    destination: "EquipmentFirstTypeScreen",

    section: "24/7 Program",
  },

  {
    id: 909,

    label: "FAQ's",

    destination: "FAQview",

    section: "24/7 Program",
  },

  {
    id: 910,

    label: "IS Services",

    destination: "ServicesView",

    section: "24/7 Program",
  },

  {
    id: 911,

    label: "Leadership",

    destination: "Directory247",

    section: "24/7 Program",
  },

  {
    id: 912,

    label: "Quick Reference",

    destination: "JobAidView",

    section: "24/7 Program",
  },

  {
    id: 913,

    label: "Service Desk Escalation",

    destination: "ServiceDeskEscalationView",

    section: "24/7 Program",
  },

  {
    id: 914,

    label: "SOS",

    destination: "SosScreenView",

    section: "24/7 Program",
  },

  {
    id: 915,

    label: "Travel Support",

    destination: "TravelView",

    section: "24/7 Program",
  },

  {
    id: 916,

    label: "COVID Test Request",

    destination: "https://www.chla.org/covidtesting",

    section: "COVID-19",
  },

  {
    id: 917,

    label: "MyChildren’s LA Portal",

    destination: "https://chla.iqhealth.com/home",

    section: "COVID-19",
  },

  {
    id: 918,

    label: "Symptom Screener",

    destination: "https://www.chla.org/screener",

    section: "COVID-19",
  },

  {
    id: 919,

    label: "Directory",

    destination: "DirectorySearch",

    section: "Getting Around",
  },

  {
    id: 920,

    label: "Shuttle Tracking (Beta)",

    destination: "ShuttleTrackingMainView",

    section: "Getting Around",
  },

  {
    id: 921,

    label: "Wayfinding (Beta)",

    destination: "MainNavigationView",

    section: "Getting Around",
  },

  {
    id: 923,

    label: "Create IS Ticket",

    destination: "ISticketView",

    section: "IS Support",
  },

  {
    id: 924,

    label: "IS Support Chatbot",

    destination:
      "https://app-appdev-issupport-prod.ase-eapps-prod-001.p.azurewebsites.net",

    section: "IS Support",
  },

  {
    id: 925,

    label: "IS Alerts/Outages",

    destination:
      "https://chla.sharepoint.com/teams/InformationServices/IS%20Alerts/Forms/AllItems.aspx",

    section: "IS Support",
  },

  {
    id: 927,

    label: "Calendar",

    destination: "EventCalendarView",

    section: "HR & Benefits",
  },

  {
    id: 928,

    label: "CHLA Benefits",

    destination: "https://benefits.chla.org",

    section: "HR & Benefits",
  },

  {
    id: 929,

    label: "Contact Parking Services",

    destination: "tel:3233612214",

    section: "HR & Benefits",
  },

  {
    id: 930,

    label: "Healing Response Team (HeaRT)",

    destination: "mailto:peernow@chla.usc.edu",

    section: "HR & Benefits",
  },

  {
    id: 931,

    label: "HR Team Member Service Center",

    destination: "tel:3233618326;mailto:TeamServiceCenter@chla.usc.edu",

    section: "HR & Benefits",
  },

  {
    id: 932,

    label: "iLearn",

    destination:
      "https://play.google.com/store/apps/details?id=com.csod.learning&hl=en_US&gl=US",

    section: "HR & Benefits",
  },

  {
    id: 933,

    label: "Job Openings",

    destination:
      "https://employees-chla.icims.com/jobs/login?loginOnly=1&redirect=&hashed=-625949178",

    section: "HR & Benefits",
  },

  {
    id: 935,

    label: "WorkPerks",

    destination:
      "https://chla.sharepoint.com/teams/WellnessWarriorsSubGroup/SitePages/Work-Perks.aspx",

    section: "HR & Benefits",
  },

  {
    id: 936,

    label: "Camera Capture",

    destination:
      "https://play.google.com/store/apps/details?id=com.cerner.cameracapture.production&hl=en_US&gl=US",

    section: "Clinical Resources",
  },

  {
    id: 937,

    label: "Cerner Message Center",

    destination:
      "https://play.google.com/store/apps/details?id=com.cerner.messagecenter&hl=en_US&gl=US",

    section: "Clinical Resources",
  },

  {
    id: 938,

    label: "Clairvia",

    destination:
      "https://chlacacvprod.cernerworks.com/clairviaweb/clairvia-access.html",

    section: "Clinical Resources",
  },

  {
    id: 939,

    label: "On-Call Schedule",

    destination: "https://oncall.chla.org/",

    section: "Clinical Resources",
  },

  {
    id: 940,

    label: "Vocera Vina",

    destination: "https://apps.apple.com/us/app/vocera-vina/id1319490339",

    section: "Clinical Resources",
  },

  {
    id: 941,

    label: "PowerChart Touch",

    destination:
      "https://play.google.com/store/apps/details?id=com.cerner.android.powercharttouch&hl=en_US&gl=US",

    section: "Clinical Resources",
  },

  {
    id: 942,

    label: "Call Security Office",

    destination: "Call",

    section: "Safety & Security",
  },

  {
    id: 943,

    label: "iReport",

    destination:
      "https://chlaireport.la.ad.chla.org/RL6_Prod/Homecenter/Client/Login.aspx",

    section: "Safety & Security",
  },

  {
    id: 944,

    label: "Facebook",

    destination: "https://www.facebook.com/ChildrensLA",

    section: "Social Media",
  },

  {
    id: 945,

    label: "Instagram",

    destination: "https://www.instagram.com/childrensla/",

    section: "Social Media",
  },

  {
    id: 946,

    label: "LinkedIn",

    destination:
      "https://www.linkedin.com/company/children%27s-hospital-los-angeles-chla",

    section: "Social Media",
  },

  {
    id: 947,

    label: "Twitter",

    destination: "https://twitter.com/childrensLA",

    section: "Social Media",
  },

  {
    id: 948,

    label: "IS Dashboards",

    destination:
      "https://app.powerbi.com/groups/f98fd252-cfd1-403c-bb19-a80cf0ea5c1c/dashboards/5801f035-be0e-4279-960d-9e7e8d8ea39e",

    section: "IS Team",
  },

  {
    id: 949,

    label: "SD Tracking Board",

    destination: "https://trackingboard.chla.org/displayboard/?id=8",

    section: "IS Team",
  },
];
const names = [
  "Claim247",
  "ClaimEmployeeMemberClaim",
  "ClaimISMemberClaim",
  "ClaimLeadership",
  "ClaimSOS",
  "ClaimOrderEquipment",
  "ClaimISServices",
  "ClaimISServices",
];

function Notification(props) {
  const buttonStyles = styles();
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  };
  const [title, setTitle] = React.useState();
  // const { authState, authService } = useOktaAuth();
  const [body, setBody] = React.useState();
  const [url, setUrl] = React.useState("android");
  const [platform, setPlatform] = React.useState("");
  const [destination, setDestination] = React.useState("");

  const theme = useTheme();
  const [TagName, setTagName] = React.useState([]);

  const tagRef = useRef();

  const handleChangeTag = (event: SelectChangeEvent<typeof TagName>) => {
    const {
      target: { value },
    } = event;
    setTagName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = { ...NotificationData };
    payload.title = title;
    payload.body = body;
    payload.platform = platform;
    payload.destination = url;
    payload.tag = TagName.concat(tagselected);
    console.log("payload", payload);
    // axios
    //   .post(
    //     "https://api-appdev-employeeapp-test-001.ase-eapps-prod-001.p.azurewebsites.net/api/PushNotification",
    //     payload,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${authState.accessToken}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  };
  const getOptions = () => {
    var array = [];
    for (var i = 0; i < destinationData.length; i++) {
      array.push(
        <option value={destinationData[i].destination}>
          &nbsp;{destinationData[i].label}
        </option>
      );
    }
    console.log();
    return array;
  };
  const [tagselected, setSelected] = useState([]);
  return (
    <div>
      <Header />
      <div className={classes.conatainer}>
        <Paper className={classes.formdiv}>
          <form onSubmit={submitHandler} className={classes.formRoot}>
            <div className={classes.title}>
              {" "}
              <input
                required
                id="notificationtile"
                fullWidth
                className={classes.input}
                type="text"
                placeholder="Notification Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <br />
            <div className={classes.title}>
              <input
                required
                id="NotificationBody"
                fullWidth
                className={classes.input}
                type="text"
                placeholder="Notification Message"
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            {/* <InputLabel htmlFor="poi-icon">Platforms</InputLabel>
            <Select
              className={classes.MuiInputBase}
              native
              required
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="i0S">&nbsp;iOS</option>
              <option value="android">&nbsp;Android</option>
              <option value="both">&nbsp;Both</option>
            </Select> */}
            {/* <FormGroup className={classes.formgroup}>
              <div className={classes.text}>Send by Email</div>

              <FormControlLabel
                control={
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />
              <div className={classes.text}>Send by Category</div>
            </FormGroup> */}
            {/* <div className={classes.text}>Send by Category</div> */}
            {/* {checked ? ( */}
            <br/>
            <div style = {{width : "100%"}}>
              <FormControl style = {{width : "100%",margin:"0px"}} sx={{ m: 1 }}>
                <InputLabel id="demo-multiple-checkbox-label">Select by Category</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={TagName}
                  onChange={handleChangeTag}
                  input={<OutlinedInput label="Select by Category" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={TagName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* <FormControl className={classes.FormControl}>
                <Select
                  multiple
                  displayEmpty
                  value={TagName}
                  onChange={handleChangeTag}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Select Tags</em>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <em>Select Tags</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      // style={getStyles(name, TagName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}
            </div>
            {/* // ) : ( */}
            <br />
            <div className={classes.text}>Send by Email</div>
            <br />
            <TagsInput
              value={tagselected}
              onChange={setSelected}
              name="Tags"
              placeHolder="Enter Users Email"
            />
            {/* )} */}
            {/* react-tag-input__input */}
            <br />
            {/* <InputLabel htmlFor="poi-icon">Destination</InputLabel>
            <Select
              className={classes.MuiInputBase}
              native
              required
              onChange={(e) => setDestination(e.target.value)}
            >
              {getOptions()}
              <option value="url">&nbsp;URL</option>
            </Select>
            <br />
            {destination == "url" ? (
              <TextField
                required
                id="destination"
                fullWidth
                placeholder="Destination URL"
                onChange={(e) => setUrl(e.target.value)}
              />
            ) : (
              <></>
            )} */}
            <Button
              className={buttonStyles.buttonImp}
              variant="contained"
              color="#fff"
              type="submit"
              // style={{ marginLeft: "46%" }}
            >
              {/* {loader ? (
              <CircularProgress style={{ color: "white" }} size="1.5rem" />
            ) : ( */}
              Send Notification
              {/* )} */}
            </Button>
          </form>
          <br />
        </Paper>
      </div>
    </div>
  );
}
export default Notification;
