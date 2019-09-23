import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  columns = [
    { name: 'alias', title: 'مستعار' },
    { name: 'title', title: 'عنوان' },
    { name: 'status', title: 'وضعیت' },
    { name: 'country_id', title: ' کشور' },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
