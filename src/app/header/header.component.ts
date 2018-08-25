import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menuservice.service';
import { Menu} from './modal/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus: Menu[];

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu()
  {
    this.menuService.getMenu().subscribe(menus => this.menus = menus);
  }

}
