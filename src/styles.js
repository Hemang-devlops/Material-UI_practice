import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.dark,
        padding: theme.spacing(8, 0, 6)
    },
    icon:{
        marginRight: '5px',
    },
    button:{
        marginTop:'40px'
    },
    card:{
        height: '100%',
        display:'flex',
        flexDirection:'column'
    },
    cardGrid: {
        padding: '20px 0'
    },
    cardMedia:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow: 1
    },
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));

export default useStyles;