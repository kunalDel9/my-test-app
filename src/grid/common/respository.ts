import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class DataRepository {
    constructor() { }
    ListConfigratorRepo = [
        {
            ListID: 1, ListName: 'Student List', ListCode: 'student', Cols: [
                {
                    Id: 1, field: 'ID', headerName: 'StudentID', IsSelected: true, IsPrimary: false, IsEditable: false,
                    sortable: true, filter: true
                },
                {
                    Id: 2, field: 'Name', headerName: 'Student Name', IsSelected: true, IsPrimary: false, IsEditable: false,
                    sortable: true, filter: true, checkboxSelection: true
                },
                {
                    Id: 3, field: 'Roll', headerName: 'Roll', IsSelected: true, IsPrimary: false, IsEditable: false,
                    sortable: true, filter: true
                },
                {
                    Id: 4, field: 'Class', headerName: 'Class', IsSelected: true, IsPrimary: false, IsEditable: false,
                    sortable: true, filter: true
                },
                {
                    Id: 5, field: 'FName', headerName: 'Father Name', IsSelected: true, IsPrimary: false, IsEditable: false,
                    sortable: true, filter: true
                },
                {
                    Id: 6, field: 'Address', headerName: 'Address', IsSelected: true, IsPrimary: false, IsEditable: false,
                    sortable: true, filter: true
                },
                {
                    Id: 7, field: 'Pin', headerName: 'PIN', IsSelected: true, IsPrimary: false, IsEditable: false,
                    sortable: true, filter: true
                },
            ]
        },
        {
            ListID: 2, ListName: 'Employee List', ListCode: 'employee', Cols: [
                {
                    Id: 1, field: 'ID', headerName: 'EmpID', IsSelected: true, IsPrimary: true, IsEditable: false,
                    IsSortable: true, sortable: true, filter: true
                },
                {
                    Id: 2, field: 'Name', headerName: 'Employee Name', IsSelected: true, IsPrimary: false, IsEditable: false,
                    IsSortable: true, sortable: true, filter: true, checkboxSelection: true
                },
                {
                    Id: 3, field: 'EmpID', headerName: 'Employee ID', IsSelected: true, IsPrimary: false, IsEditable: false,
                    IsSortable: true, sortable: true, filter: true
                },
                {
                    Id: 4, field: 'Dept', headerName: 'Department', IsSelected: true, IsPrimary: false, IsEditable: false,
                    IsSortable: true, sortable: true, filter: true
                },
                {
                    Id: 5, field: 'FName', headerName: 'Father Name', IsSelected: true, IsPrimary: false, IsEditable: false,
                    IsSortable: true, sortable: true, filter: true
                },
                {
                    Id: 6, field: 'Address', headerName: 'Address', IsSelected: true, IsPrimary: false, IsEditable: false,
                    IsSortable: true, sortable: true, filter: true
                },
                {
                    Id: 7, field: 'Pin', headerName: 'PIN', IsSelected: true, IsPrimary: false, IsEditable: false,
                    IsSortable: true, sortable: true, filter: true
                },
            ]
        }
    ]
    dataStudent = {
        Data: [{ ID: 1001, Name: 'Rahul', Roll: 1, Class: '1', FName: 'Ram Singh', Address: 'Mumbai', Pin: '110000' },
        { ID: 1003, Name: 'Dev', Roll: 2, Class: '2', FName: 'Krishan Singh', Address: 'Delhi', Pin: '110000' },
        { ID: 1004, Name: 'Rahim', Roll: 51, Class: '2', FName: 'Balram Singh', Address: 'Patna', Pin: '110000' },
        { ID: 1005, Name: 'Sita', Roll: 21, Class: '10', FName: 'Jeevan Singh', Address: 'Kanpur', Pin: '110000' },
        { ID: 1006, Name: 'Amar', Roll: 61, Class: '11', FName: 'Kailash Singh', Address: 'Mumbai', Pin: '110000' },
        { ID: 1007, Name: 'Rohit', Roll: 81, Class: '12', FName: 'Sumit Singh', Address: 'Mumbai', Pin: '110000' }
        ]
    }
    dataEmployee = {
        Data: [{ ID: 1, Name: 'Raja', EmpID: 1, Dept: '1', FName: 'Rahul Singh', Address: 'Mumbai', Pin: '120000' },
        { ID: 2, Name: 'Bhim', EmpID: 1, Dept: '1', FName: 'Dev Singh', Address: 'Delhi', Pin: '110100' },
        { ID: 3, Name: 'Gurudev', EmpID: 1, Dept: '1', FName: 'A.K Singh', Address: 'Patna', Pin: '110030' },
        { ID: 4, Name: 'Sita', EmpID: 1, Dept: '1', FName: 'PM Singh', Address: 'Kanpur', Pin: '110030' },
        { ID: 5, Name: 'Karim', EmpID: 1, Dept: '1', FName: 'Amar Singh', Address: 'Mumbai', Pin: '110300' },
        { ID: 6, Name: 'Angela', EmpID: 1, Dept: '1', FName: 'Rohit Singh', Address: 'Mumbai', Pin: '110900' }
        ]
    }

    getCols(type): any {
        return this.ListConfigratorRepo.find(x => x.ListCode === type).Cols;
    }
    getData(type): any {
        if(type === 'employee') {return this.dataEmployee.Data;
        }        else if(type === 'student'){return this.dataStudent.Data; }
    }
}