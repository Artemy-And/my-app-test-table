

export interface DataUsersType {
    id:number
    name: string;
    lastname: string;
    gender: GenderType;
    email: string;
    phone:string
    delete?:string
}
export type GenderType = 'male' | 'female' | ''
function createData(id:number, name: string, lastname: string, gender: GenderType, email: string, phone:string): DataUsersType {
    return { id,name, lastname, gender, email,phone };
}


export const rows = [
    createData(Math.floor(Math.random()*100000),'Albert', 'warren', "male", "Albert@gmail.com","89522003030"),
    createData(Math.floor(Math.random()*100000),'Evgeny', 'olsen', "male", "Commander@gmail.com","89522002020"),
    createData(Math.floor(Math.random()*100000),'Ysance', 'porter', "female", "Ysance@gmail.com","89502003030"),
    createData(Math.floor(Math.random()*100000),'Elena', 'andersen', "female", "Internet@gmail.com","89022001030"),
    createData(Math.floor(Math.random()*100000),'Violetta', 'fritz', "female", "yandex@gmail.com","89002003030"),
    createData(Math.floor(Math.random()*100000),'Angelika', 'klessens', "female", "yandex@gmail.com","89112003030"),
    createData(Math.floor(Math.random()*100000),'Vasylii', 'rocha', "male", "Vasylii@gmail.com","89095553030"),
    createData(Math.floor(Math.random()*100000),'Tealium', 'hamilton', "female", "Tealium@gmail.com","89502663030"),
    createData(Math.floor(Math.random()*100000),'Emarsys', 'abraham', "male", "Emarsys@gmail.com","89992003999"),
    createData(Math.floor(Math.random()*100000),'Expsaert', 'hamzaoğlu', "male", "Expsaert@gmail.com","89002008888"),
    createData(Math.floor(Math.random()*100000),'John', 'tielen', "male", "John@gmail.com","89002009999"),
    createData(Math.floor(Math.random()*100000),'Ysance', 'taylor', "male", "Ysance@gmail.com","89002005088"),
    createData(Math.floor(Math.random()*100000),'Robert', 'brown', "male", "Robert@gmail.com","89998008888"),
    createData(Math.floor(Math.random()*100000),'Timur', 'saez', "male", "Timur@gmail.com","89009808888"),
    createData(Math.floor(Math.random()*100000),'Roland', 'schmitz', "male", "Roland@gmail.com","89532008888"),
    createData(Math.floor(Math.random()*100000),'Franc', 'bowman', "male", "Franc@gmail.com","89852008888"),
    createData(Math.floor(Math.random()*100000),'Tewlum', 'allen', "female", "Tewlum@gmail.com","89382008888"),
    createData(Math.floor(Math.random()*100000),'Emarsysnk', 'willis', "female", "Emarsysnk@gmail.com","89009995888"),

];

