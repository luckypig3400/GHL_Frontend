import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.secondary.main,
        height: '100%',
        borderRadius: '2rem',
        padding: theme.spacing(5),
        boxShadow: '6px 6px 10px rgba(0,0,0,0.2)',
        border: `1px solid ${theme.palette.border.main}`,
    },
    card: {
        backgroundColor: theme.palette.secondary.main,
        transition: 'all .3s',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
        '&.active': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))

export default useStyles
