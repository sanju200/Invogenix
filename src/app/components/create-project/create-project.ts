import { Component } from '@angular/core';
import { currencyList } from '../../dummyData/currency';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-create-project',
  imports: [FontAwesomeModule],
  templateUrl: './create-project.html',
  styleUrl: './create-project.scss',
})
export class CreateProject {
  faArrowLeft = faArrowLeft;
  TaxIdTypeLabel: string = 'VAT Number';
  agreementTypeLabel: string = 'SOW Reference';
  currencyData: any[] = currencyList;

  constructor(public location: Location) { }

  onSelectChange(event: any) {
    const value = event.target.value;
    this.TaxIdTypeLabel = value === 'VAT' ? 'VAT Number' : 'Fiscal ID';
  }

  onAgreementChange(event: any) {
    const value = event.target.value;
    this.agreementTypeLabel = value === 'SOW' ? 'SOW Reference' : 'MSA Reference';
  }

  onBackClick() {
    this.location.back();
  }
}
