import React from 'react';
import classes from './Home.module.css';
import { Grid, Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExtensionIcon from '@mui/icons-material/Extension';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { ReactComponent as ReactIcon } from '../../imgs/react.svg';

const Home = () => {
  const techArray = [
    'Java Sctipt(ES6)',
    'React 18.0.0',
    'MaterialUl 5.5.3',
    'Firebase 9.6.10',
    'HTML5',
    'CSS3(animation)',
  ];
  const abilArray = [
    'Auth with social',
    'Chating in realtime',
    'Sending photos',
    'Typing emodji',
    'Changing UI theme',
    'Sending likes',
  ];

  function CreateList(props) {
    let i = 0;

    const listItems = [1, 2, 3, 4, 5, 6].map((number) => (
      <ListItem className={classes.item} key={number}>
        <ListItemIcon>
          {props.icons === 1 ? (
            <ExtensionIcon className={classes.icon} />
          ) : (
            <BookmarkAddedIcon className={classes.icon} />
          )}
        </ListItemIcon>
        <span className={classes.li}>{props.array[i++]}</span>
      </ListItem>
    ));

    return <List className={classes.list}>{listItems}</List>;
  }

  const escapeMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Container>
      <Grid
        container
        onMouseDown={(event) => escapeMouseDown(event)}
        className={classes.wrapper}
        direction={'column'}
      >
        <h1
          className={classes.title}
          onMouseDown={(event) => escapeMouseDown(event)}
        >
          About app
        </h1>
        <Grid
          className={classes.text}
          onMouseDown={(event) => escapeMouseDown(event)}
        >
          LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
        </Grid>
        <div
          className={classes.lists}
          onMouseDown={(event) => escapeMouseDown(event)}
        >
          <Grid className={classes.firstList}>
            <h2 className={classes.subtitle}>Abilities:</h2>
            <CreateList array={abilArray} icons={1} />
          </Grid>
          <Grid className={classes.wrapperReactIcon}>
            <ReactIcon className={classes.reactIcon} />
          </Grid>
          <Grid>
            <h2 className={classes.subtitle}>Technologies:</h2>
            <CreateList array={techArray} icons={2} />
          </Grid>
        </div>
        <Grid
          className={classes.enjoy}
          onMouseDown={(event) => escapeMouseDown(event)}
        >
          Enjoy with using my app
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
