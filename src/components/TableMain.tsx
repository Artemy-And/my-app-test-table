import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {DataUsersType, GenderType, rows} from "./mock/mock-array-users";
import {RootStateType} from "./redux/Store";
import {useDispatch, useSelector} from 'react-redux';
import {Button, Checkbox} from "@material-ui/core";
import style from "../components/Table.module.css";

interface Column {
    id: 'id' | 'name' | 'lastname' | 'gender' | 'email' | 'phone' | 'delete';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    {id: 'id', label: 'ID'},
    {id: 'name', label: 'Name'},
    {id: 'lastname', label: 'Lastname'},
    {id: 'gender', label: 'gender',},
    {id: 'delete', label: '', align: 'right'},
];

type TableMainPropsType = {
    setUserNew: Function
}


export function TableMain(props: TableMainPropsType) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const array = useSelector<RootStateType, Array<DataUsersType>>(state => state.table.array)
    const [gender, setGender] = useState<GenderType>('')

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const onClickUserPage = (user: DataUsersType) => {
        let newUser = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            gender: user.gender,
            email: user.email,
            phone: user.phone
        };
        props.setUserNew(newUser)
        window.location.hash = "#/user"
    }
    let filteredArray = array
    if (gender === 'male') {
        filteredArray = filteredArray.filter((c) => c.gender === 'male')
    }
    if (gender === 'female') {
        filteredArray = filteredArray.filter((c) => c.gender === 'female')
    }
    return (
        <Paper className={style.root}>
            <Button color="primary" onClick={() => {
                window.location.hash = "#/addNewUser"
            }}>Добавить Пользователя
            </Button>
            <TableContainer className={style.containerTable}>
                <div>
                    <div>
                        <Checkbox color="primary" onClick={() => {
                            setGender('male')
                        }}
                        />Man
                    </div>
                    <div><Checkbox color="primary" onClick={() => {
                        setGender('female')
                    }}/>Women
                    </div>
                    <div><Checkbox color="primary" onClick={() => {
                        setGender('')
                    }}/>All
                    </div>
                </div>

                <Table className={style.table} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell

                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value ||
                                                    <Button onClick={() => {
                                                        onClickUserPage(row)
                                                    }}>more info</Button>}
                                            </TableCell>
                                        );
                                    })
                                    }
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

        </Paper>
    );
}