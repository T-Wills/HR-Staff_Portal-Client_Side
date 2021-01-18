import * as React from "react";
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme =>({
    
    root: {
        backgroundColor: 'white',
        color: theme.palette.primary.dark,
        height: "8%",
        width: "100%"
        
    },

    searchInput: {
        
        opacity: '0.3',
        padding: `0px ${theme.spacing(1.5)}px`,
        fontSize: '0.8rem',
        borderRadius: '0.5rem',
        backgroundColor: 'grey',
        marginBottom:"0.7em",
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }   
    },

    text:{
        marginBottom:"0.7em",
    },

    notif: {
        marginBottom:"0.3em",
        marginRight:"1em",
    }
     
}));


const Header = (props) => {
    const classes = useStyles();

    const {title} = props;
    return(
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item sm className={classes.text}>{title}</Grid>
                    <Grid item sm={6}>
                        <InputBase
                            placeholder="Search topics"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                            fullWidth    
                        />
                    </Grid >
                    <Grid item sm={5}>
                        <IconButton className={classes.notif}>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Grid>
                   {/*  <Grid item sm={6}>
                        
                    </Grid> */}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;