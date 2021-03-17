import React, {useCallback, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {DataUsersType, rows} from "./mock/mock-array-users";
import {RootStateType} from "./redux/Store";
import {useDispatch, useSelector} from 'react-redux';
import {NewUser} from "./newUser/NewUser";
import {setAddNewContactAC} from "./redux/table-reducer";
import {Button} from "@material-ui/core";

interface Column {
    id: 'id'|'name' | 'lastname' | 'gender' | 'email' | 'phone';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}
const columns: Column[] = [
    { id: 'id', label: 'ID',minWidth: 170 },
    { id: 'name', label: 'Name',minWidth: 170},
    { id: 'lastname', label: 'Lastname',align: 'right',minWidth: 170},
    { id: 'gender', label: 'gender',align: 'right',minWidth: 170},
];
const useStyles = makeStyles({
    root: {
        width: '100%',
        display:'flex',
        flexDirection:'column'

    },
    container: {
        maxHeight: 440,
    },
});


export function StickyHeadTable() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const array = useSelector<RootStateType, Array<any>>(state => state.table.array)
    let [modal, setModal] = useState<boolean>(false)
    const [userNew, setUserNew] = useState<DataUsersType>({
        id:1,
        name: '',
        lastname: '',
        gender: '',
        email:'',
        phone:''

    })
    const addNewUser = useCallback((user: DataUsersType) => {
        let newUser = {id: Math.floor(Math.random()*100000), name: user.name, lastname: user.lastname,gender:user.gender,email:user.email,phone:user.phone};
        dispatch(setAddNewContactAC(newUser))
        //setUsers([newUser, ...array])
    }, [array])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <Button color="primary" onClick={() => {
                setModal(true)
            }}>Добавить Пользователя
            </Button>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {array.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <NewUser userNew={userNew} setUserNew={setUserNew} addNewUser={addNewUser} setModal={setModal} modal={modal}/>
        </Paper>
    );
}