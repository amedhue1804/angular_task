import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from '../../components/task/tasklist/tasklist.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TasklistComponent, CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}