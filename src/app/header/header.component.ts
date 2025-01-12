import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showDropdown = false;

  onOpenUserDropdown() {
    this.showDropdown = true;
  }
}
