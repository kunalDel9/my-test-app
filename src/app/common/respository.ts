export class ListmasterComponent {
    constructor() { }
    ListConfigratorRepo = [
        {
            ListID: 1, ListName: 'Student List', ListCode: 'student', ColData: [
                { Id: 1, ColName: 'ID', Caption: 'Student Name', IsSelected: true, IsPrimary: false, IsEditable: false, 
                IsSortable: true },
                { Id: 2, ColName: 'Name', Caption: 'Student Name', IsSelected: true, IsPrimary: false, IsEditable: false, 
                IsSortable: true },
                { Id: 3, ColName: 'Roll', Caption: 'Student Name', IsSelected: true, IsPrimary: false, IsEditable: false, 
                IsSortable: true },
                { Id: 4, ColName: 'Class', Caption: 'Student Name', IsSelected: true, IsPrimary: false, IsEditable: false, 
                IsSortable: true },
                { Id: 5, ColName: 'FName', Caption: 'Student Name', IsSelected: true, IsPrimary: false, IsEditable: false, 
                IsSortable: true },
                { Id: 6, ColName: 'Address', Caption: 'Student Name', IsSelected: true, IsPrimary: false, IsEditable: false, 
                IsSortable: true },
                { Id: 7, ColName: 'Pin', Caption: 'Student Name', IsSelected: true, IsPrimary: false, IsEditable: false, 
                IsSortable: true },
            ]
        }
    ]
    dataStudent = [{
        id: 1,

        Data: [{ ID: 1001, Name: 'Rahul', Roll: 1, Class: '1', FName: 'Ram Singh', Address: 'Mumbai', Pin: '110000' },
        {  ID: 1003, Name: 'Dev', Roll: 2, Class: '2', FName: 'Krishan Singh', Address: 'Delhi', Pin: '110000' },
        {  ID: 1004, Name: 'Rahim', Roll: 51, Class: '2', FName: 'Balram Singh', Address: 'Patna', Pin: '110000' },
        {ID: 1005, Name: 'Sita', Roll: 21, Class: '10', FName: 'Jeevan Singh', Address: 'Kanpur', Pin: '110000' },
        {ID: 1006, Name: 'Amar', Roll: 61, Class: '11', FName: 'Kailash Singh', Address: 'Mumbai', Pin: '110000' },
        {ID: 1007, Name: 'Rohit', Roll: 81, Class: '12', FName: 'Sumit Singh', Address: 'Mumbai', Pin: '110000' }
        ]
    }]
    dataEmployee = [{
        id: 2,
        ListName: 'employee',
        ListCode: 'employee',
        Data: [{ Name: 'Raja', EmpID: 1, Dept: '1', FName: 'Rahul Singh', Address: 'Mumbai', Pin: '120000' },
        { Name: 'Bhim', EmpID: 1, Dept: '1', FName: 'Dev Singh', Address: 'Delhi', Pin: '110100' },
        { Name: 'Gurudev', EmpID: 1, Dept: '1', FName: 'A.K Singh', Address: 'Patna', Pin: '110030' },
        { Name: 'Sita', EmpID: 1, Dept: '1', FName: 'PM Singh', Address: 'Kanpur', Pin: '110030' },
        { Name: 'Karim', EmpID: 1, Dept: '1', FName: 'Amar Singh', Address: 'Mumbai', Pin: '110300' },
        { Name: 'Angela', EmpID: 1, Dept: '1', FName: 'Rohit Singh', Address: 'Mumbai', Pin: '110900' }
        ]
    }]

}