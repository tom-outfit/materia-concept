import React from 'react';
import { AppBar, Toolbar, IconButton, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerModal from './DrawerModal.js';
import ParagraphBlock from './ParagraphBlocks.js';
import data from './data.json';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '64px',
  },
}));


function App() {
  const classes = useStyles();
  const stories = data;
  const block = stories.map((story) => {
    return (
      <ParagraphBlock key={story.id}
        text={story.content} />
    )
  })
  // Object.keys(stories).map((story, i) => {console.log(story.content)})
  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            Menu
          </Toolbar>
        </AppBar>
        {/* Drawer to be refactored as stand alone component */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <DrawerModal />
        </Drawer>
        <main className={classes.content}>
          {/* contentBlockComponent
              uses responsive grid        
          */}
          {block}
        </main>
      </div>
    </div>
  );
}

export default App;
