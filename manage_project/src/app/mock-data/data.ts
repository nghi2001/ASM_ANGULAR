import { Employes } from "../interfaces/employes"
import { Project } from "../interfaces/project"
import { Task } from "../interfaces/task"
export const listProject:any[] = [
    {
        id:1,
        name:'Quản lý trại heo',
        startAt: '2022-03-01',
        budget: 670000,
        leader:1,
        teams: [1,2,3,4],
        state: true
    },
    {
        id:2,
        name:'Cây xanh công viên',
        startAt: '2022-03-01',
        budget: 670000,
        leader:1,
        teams: [1,2,3,4],
        state: false,
    },
    {
        id:3,
        name:'Website Du Lịch Bụi',
        startAt: '2022-03-01',
        budget: 670000,
        leader:1,
        teams: [1,2,3,4],
        state: false
    }
]

export const listEmployes:any[] = [
    {
        id:1,
        lastname: 'Nguyen Duy',
        firstname: 'Nghi',
        birthday: '2001-3-3',
        khuvuc: 'Bắc',
        sex: true
    },
    {
        id:2,
        lastname: 'Nguyen Hà',
        firstname: 'Nghi',
        birthday: '2001-3-3',
        khuvuc: 'Bắc',
        sex: true
    },
    {
        id:3,
        lastname: 'Nguyen Thanh',
        firstname: 'Nghi',
        birthday: '2001-3-3',
        khuvuc: 'Bắc',
        sex: true
    },
    {
        id:4,
        lastname: 'Nguyen Lê',
        firstname: 'Nghi',
        birthday: '2001-3-3',
        khuvuc: 'Bắc',
        sex: true
    }
]

export const tasks:any[] = [
    {
        id:1,
        duAnID:1,
        tenTask:'Phân tích yêu cầu khách hàng',
        moTa:'Phân tích yêu cầu khách hàng để team thực hiện',
        nhanvienID:1,
        priority:0,
        status:0
    },
    {
        id:2,
        duAnID:1,
        tenTask:'fix bug',
        moTa:'Phân tích vaf fix bug giỏ hàng',
        nhanvienID:1,
        priority:0,
        status:1
    }
]