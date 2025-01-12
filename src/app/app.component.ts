import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, TasksComponent],
})
export class AppComponent {}
