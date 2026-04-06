import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from '../header/header';
import { MainLayoutComponent } from '../main-layout-component/main-layout-component';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, MatButtonModule, Header, MainLayoutComponent, Menu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  showFiller = false;
}
