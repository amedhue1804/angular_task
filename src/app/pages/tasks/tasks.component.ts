import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TasklistComponent } from '../../components/task/tasklist/tasklist.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NavbarComponent, TasklistComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
