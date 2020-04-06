import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  CssBaseline,
  IconButton,
  Drawer,
} from '@material-ui/core';
import { 
  Hidden, 
  List, 
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Filter1OutlinedIcon from '@material-ui/icons/Filter1Outlined';
import Filter2OutlinedIcon from '@material-ui/icons/Filter2Outlined';
import Filter3OutlinedIcon from '@material-ui/icons/Filter3Outlined';
import Filter4OutlinedIcon from '@material-ui/icons/Filter4Outlined';
import Filter5OutlinedIcon from '@material-ui/icons/Filter5Outlined';
import Filter6OutlinedIcon from '@material-ui/icons/Filter6Outlined';
import Filter7OutlinedIcon from '@material-ui/icons/Filter7Outlined';
import Filter8OutlinedIcon from '@material-ui/icons/Filter8Outlined';
import Filter9OutlinedIcon from '@material-ui/icons/Filter9Outlined';
import Filter9PlusOutlinedIcon from '@material-ui/icons/Filter9PlusOutlined';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },  
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },  
  directionsButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },    
}));

const NavBar = props => {
  return (
    <AppBar position="fixed" className={props.className}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label={props.directionsLabel}
          edge="start"
          onClick={props.onClick}
          className={props.directionsClassName}
        >
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Savage World Character Builder
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

function App(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { container } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDirectionsToggle = () => {
    setMobileOpen(!mobileOpen);    
  };

  const numberedListIcons = [
    (<Filter1OutlinedIcon />),
    (<Filter2OutlinedIcon />),
    (<Filter3OutlinedIcon />),
    (<Filter4OutlinedIcon />),
    (<Filter5OutlinedIcon />),
    (<Filter6OutlinedIcon />),
    (<Filter7OutlinedIcon />),
    (<Filter8OutlinedIcon />),
    (<Filter9OutlinedIcon />),
    (<Filter9PlusOutlinedIcon />),
  ];

  const creationSteps = [{
    title: "Concept",
    intent: "Start with a general idea of what character you want to play. Think cinematically.",
    mechanics: []
  }, {
    title: "Ancestory or Culture",
    intent: "Chose your character's beginnings.",
    mechanics: [
      "This grants bonuses or special abilities."
    ]
  }, {
    title: "Hindrances",
    intent: "Select Hindrances that describe your character's flaws or challenges.",
    mechanics: [
      "Select up to 4 points.",
      "Major Hindrances are worth 2 points.",
      "Minor Hindrances are worth 1 point."
    ]
 }, {
    title: "Attributes",
    intent: "Set your character's Agility, Smarts, Spirit, Strength, and Vigor.",
    mechanics: [
      "Your character's attribute start at d4. An average attribute is a d6.",
      "You can step up attributes 5 times for free.",
      "You can spend 2 Hindrance points to step up an attribute.",
    ]
  }, {
    title: "Skills",
    intent: "Describe your character's knowledge and training. You start with the core skills: Athletics, Common Knowledge, Notice, Persuasion, and Stealth.",
    mechanics: [
      "Each skill is linked to an attribute.",
      "You have 12 skill points. You can spend 1 Hindrance point to gain 1 skill point.",
      "It costs 1 skill point to gain a skill or step up the skill until it equals its linked attribute. It costs 2 points to step up a skill above its linked attribute."
    ]
  }, {
    title: "Edges",
    intent: "Add special abilities or weird powers that set your character apart from the average person.",
    mechanics: [
      "You can spend 2 Hindrance points to buy an Edge. Your Ancestory may also give you a free choice.",
      "For now, you can select Novice Edges only. As your character advances, other choices will become available."
    ]
  }, {
    title: "Gear",
    intent: "Buy the equipment your character normally takes on adventures.",
    mechanics: [
      "You may purchase $500 worth of equipment.",
      "You can spend 1 Hindrance point to purchase antoher $1,000 of equipment."
    ]
  },]

  const directions = (
    <div>
      <div className={classes.toolbar} />
      <List alignItems="flex-start">
        {creationSteps.map((step, index) => (
          <>
            <ListItem button key={step.title}>
              <ListItemIcon>{numberedListIcons[index]}</ListItemIcon>
              <ListItemText primary={step.title} />
            </ListItem>
            <Typography variant="body1">{step.intent}</Typography>
            {step.mechanics.map(m => (
              <Typography variant="body2">{m}</Typography>
            ))}
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar 
        className={classes.appBar} 
        directionsClassName={classes.directionsButton}
        directionsLabel="Open directions"
        onClick={handleDirectionsToggle}
      />
      <nav className={classes.drawer} aria-label="directions">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDirectionsToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}          
          >
            {directions}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {directions}
          </Drawer>
        </Hidden>        
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography >Character Sheet Goes Here</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        </main>
    </div>
  );
}

export default App;
