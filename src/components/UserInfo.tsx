import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
    },
});


export function UserInfo() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                           Информация о пользователе:
                        </Typography>
                        <Typography variant="h5" component="h2">
                          Имя: {'sss'}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Фамилия: {'sss'}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Телефон: {'sss'}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Почта: {'sss'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Вернуться</Button>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    );
}