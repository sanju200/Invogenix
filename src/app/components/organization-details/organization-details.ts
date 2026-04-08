import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { ImageUpload } from '../common/image-upload/image-upload';

@Component({
  selector: 'app-organization-details',
  standalone: true,
  imports: [FontAwesomeModule, ImageUpload],
  templateUrl: './organization-details.html',
  styleUrl: './organization-details.scss',
})
export class OrganizationDetails {
  faPrint = faPrint
  file: File | null = null;
  

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    if (this.file) {
      console.log('Uploading file:', this.file);
    }
  }
}
