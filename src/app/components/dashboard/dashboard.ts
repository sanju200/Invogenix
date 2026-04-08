import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { projectData } from '../../dummyData/projectData';
import { UploadExcel } from '../upload-excel/upload-excel';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule, CommonModule, UploadExcel, MatDialogModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  faEdit = faEdit;
  faTrash = faTrash;
  faUpload = faUpload;
  faPlus = faPlus;
  projects: any = projectData;
  readonly dialog = inject(MatDialog);

  constructor(public router: Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(UploadExcel, {
      width: '60vw',
      maxWidth: '90vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  navigatetoCreateProject() {
    this.router.navigate(['/create-project']);
  }
}


