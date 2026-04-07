import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { projectData } from '../../dummyData/projectData';


@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  faEdit = faEdit;
  faTrash = faTrash;
  projects: any = projectData;
}
