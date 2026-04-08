import { Component } from '@angular/core';
import { currencyList } from '../../dummyData/currency';

@Component({
  selector: 'app-create-project',
  imports: [],
  templateUrl: './create-project.html',
  styleUrl: './create-project.scss',
})
export class CreateProject {
  TaxIdTypeLabel: string = 'VAT Number';
  agreementTypeLabel: string = 'SOW Reference';
  currencyData: any[] = currencyList;

  onSelectChange(event: any) {
    const value = event.target.value;
    this.TaxIdTypeLabel = value === 'VAT' ? 'VAT Number' : 'Fiscal ID';
  }

  onAgreementChange(event: any) {
    const value = event.target.value;
    this.agreementTypeLabel = value === 'SOW' ? 'SOW Reference' : 'MSA Reference';
  }
}
