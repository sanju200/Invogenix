import { Component, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import { invitations } from '../../dummyData/invitations';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-invite-users',
  imports: [FontAwesomeModule, MatTooltipModule],
  templateUrl: './invite-users.html',
  styleUrl: './invite-users.scss',
})
export class InviteUsers {
  invitations: any[] = invitations;
  faTrash = faTrash;
  faCopy = faCopy;
  constructor(private clipboard: Clipboard) { }

  copyText(link: string, tooltip: MatTooltip) {
    this.clipboard.copy(link);
    tooltip.disabled = false;
    tooltip.show();
    setTimeout(() => { tooltip.disabled = true; }, 1500);
  }
}
