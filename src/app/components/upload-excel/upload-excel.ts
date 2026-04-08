import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { faDownload, faFile, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-upload-excel',
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatButtonToggleModule, FontAwesomeModule, CdkDrag],
  templateUrl: './upload-excel.html',
  styleUrl: './upload-excel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadExcel {
  isCustom: boolean = false;
  faDownload = faDownload;
  faFile = faFile;
  faUpload = faUpload;
  isUploaded: boolean = false;

  toggleContent() {
    this.isCustom = !this.isCustom;
  }


}
