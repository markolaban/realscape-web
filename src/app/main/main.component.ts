import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '../services/item.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  apps: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.apps().subscribe(apps => {
      if (apps) {
        console.log('apps:',apps);
        this.apps = apps;
      } else {
        this.apps = [];
      }
    });
  }

}
