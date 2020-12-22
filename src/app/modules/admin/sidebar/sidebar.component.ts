import { Component, OnInit } from '@angular/core';
import { faCoffee , faColumns,faBookOpen, faBars,faPaintBrush} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  faCoffee = faCoffee;
  faColumns = faColumns;
  faBookOpen =faBookOpen;
  faBars=faBars;
  faPaintBrush=faPaintBrush;
  isExpand = true;
  constructor() { }

  ngOnInit(): void {
  }

}
