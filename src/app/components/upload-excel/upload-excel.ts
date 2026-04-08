import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { faDownload, faFile, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkDrag } from '@angular/cdk/drag-drop';
import * as XLSX from 'xlsx';

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



  excelData: any[] = []; // 👈 store parsed data

  toggleContent() {
    this.isCustom = !this.isCustom;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      alert('Only Excel files allowed');
      return;
    }

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const binaryStr = e.target.result;

      const workbook = XLSX.read(binaryStr, { type: 'binary' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      this.excelData = XLSX.utils.sheet_to_json(worksheet, {
        defval: ''
      });

      this.isUploaded = true;
    };

    reader.readAsBinaryString(file);

  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];

    if (file) {
      this.onFileChange({ target: { files: [file] } });
    }
  }

}
