import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../myInterfaces/student';
import { MatDialog } from '@angular/material/dialog';
import { PopupstudentComponent } from './popupstudent/popupstudent.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() student!: Student;

  openStudentDialog() {
    const dialogRef = this.dialog.open(PopupstudentComponent, {data: this.student, width: '400px'});
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
