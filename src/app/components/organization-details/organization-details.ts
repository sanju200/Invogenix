import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-organization-details',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './organization-details.html',
  styleUrl: './organization-details.scss',
})
export class OrganizationDetails {
  faPrint = faPrint;

  signatureFile: File | null = null;
  signaturePreview: SafeUrl | null = null;

  stampFile: File | null = null;
  stampPreview: SafeUrl | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) { }

  onSignatureSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.match(/image\/*/)) {
      this.signatureFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.zone.run(() => {
          this.signaturePreview = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
          this.cdr.detectChanges();
        });
      };
      reader.readAsDataURL(file);
    } else if (file) {
      alert('Please select a valid image file (PNG, JPG, or JPEG)');
    }
  }

  onStampSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.match(/image\/*/)) {
      this.stampFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.zone.run(() => {
          this.stampPreview = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
          this.cdr.detectChanges();
        });
      };
      reader.readAsDataURL(file);
    } else if (file) {
      alert('Please select a valid image file (PNG, JPG, or JPEG)');
    }
  }

  clearSignature() {
    this.signatureFile = null;
    this.signaturePreview = null;
    this.cdr.detectChanges();
  }

  clearStamp() {
    this.stampFile = null;
    this.stampPreview = null;
    this.cdr.detectChanges();
  }

  uploadFile() {
    if (this.signatureFile || this.stampFile) {
      console.log('Uploading files:', {
        signature: this.signatureFile,
        stamp: this.stampFile
      });
    }
  }
}
