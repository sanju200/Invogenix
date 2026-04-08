import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faEdit, faEye, faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons';
import { currencyData, currencyList } from '../../dummyData/currency';

@Component({
  selector: 'app-manage-currency',
  imports: [FontAwesomeModule],
  templateUrl: './manage-currency.html',
  styleUrl: './manage-currency.scss',
})
export class ManageCurrency {
  faCopy = faCopy;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faTrash = faTrash;
  faEdit = faEdit;
  currencyData: any = currencyList;
  accounts: any[] = currencyData;
  visibleAccounts: Record<string, boolean> = {};

  showAccountNum(account: any) {
    this.visibleAccounts[account.id] = !this.visibleAccounts[account.id];
  }
}
