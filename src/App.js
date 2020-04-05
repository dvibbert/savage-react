import React from 'react';
import { AppBar, Grid, Toolbar, Typography, Paper } from '@material-ui/core';

const NavBar = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Savage Worlds Character Builder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
};

const Checklist = props => {
  return (
    <Paper>
      <div>Character Creation Summary</div>
      <div>
        <span>Concept</span>
        <span>Start with a general idea of what character you want to play. Think cinematically.</span>
      </div>
      <div>
        <span>Ancestory or Culture</span>
        <span>Chose your character's beginnings.</span>
        <span>This grants bonuses or special abilities.</span>
      </div>
      <div>
        <span>Hindrances</span>
        <span>Select Hindrances that describe your character's flaws or challenges.</span>
        <span>Select up to 4 points. Major Hindrances are worth 2 points. Minor Hindrances are worth 1 point.</span>
      </div>
      <div>
        <span>Attributes</span>
        <span>Set your character's Agility, Smarts, Spirit, Strength, and Vigor</span>
        <span>Your character's attribute start at d4. An average attribute is a d6.</span>
        <span>You can step up attributes 5 times for free. You can spend 2 Hindrance points to step up an attribute.</span>
      </div>
      <div>
        <span>Skills</span>
        <span>Describe your character's knowledge and training. You start with the core skills: Athletics, Common Knowledge, Notice, Persuasion, and Stealth.</span>
        <span>Each skill is linked to an attribute</span>
        <span>You have 12 skill points. You can spend 1 Hindrance point to gain 1 skill point.</span>
        <span>It costs 1 skill point to gain a skill or step up the skill until it equals its linked attribute. It costs 2 points to step up a skill above its linked attribute.</span>
      </div>
      <div>
        <span>Derived Statistics</span>
        <span>Some statistics depend on your character's Ancestory, Attributes, Skills, Edges, or Hindrances. These are calculated for you.</span>
        <span>Standard Pace: 6" (12 meters) but could be adjusted by other choices</span>
        <span>Parry: 2 plus half of Fighting</span>
        <span>Toughness: 2 plus half of Vigor, plus any Armor</span>
      </div>
      <div>
        <span>Edges</span>
        <span>Add special abilities or weird powers that set your character apart from the average person.</span>
        <span>You can spend 2 Hindrance points to buy an Edge. Your Ancestory may also give you a free choice.</span>
        <span>You may only select Novice Edges for now. As your character advances, other choices will become available.</span>
      </div>
      <div>
        <span>Gear</span>
        <span>Buy the equipment your character normally takes on adventures.</span>
        <span>You may purchase $500 worth of equipment. You may spend 1 Hindrance point to purchase antoher $1,000 of equipment.</span>
      </div>
    </Paper>
  )
};

function App() {
  return (
    <div>
      <NavBar />
      <Grid container justify="center" spacing={3}>
        <Grid item xs={3}>
          <Checklist />
        </Grid>
        <Grid item xs={6}>
          <Paper>Sheet</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>Developer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
