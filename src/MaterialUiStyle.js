
const useStyles = (theme => ({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    avatar: {
        margin: theme.spacing(1),
        border: '1px solid black',
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(20, 10),
        boxShadow:'1, 1, 2, 3 black',

    },
    card:{
      // border: '1px solid black',
        boxShadow:'2, 2, 2,5 black',
        height: 'auto',
        width: '635px'
    },
    media: {
        height: 250,
        boxShadow: '2px 2px 3px'
    },

}));

export default useStyles;

