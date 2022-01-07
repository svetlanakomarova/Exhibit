import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderComponent } from '../header.component';

@Component({
  selector: 'app-popupstudent',
  templateUrl: './popupstudent.component.html',
  styleUrls: ['./popupstudent.component.css']
})
export class PopupstudentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HeaderComponent>,
                                @Inject(MAT_DIALOG_DATA) public data: any) { }

    onOK() {
      this.dialogRef.close();
    }
  ngOnInit(): void {
  }

}
