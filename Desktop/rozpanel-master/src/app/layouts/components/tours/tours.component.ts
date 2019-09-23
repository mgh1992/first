import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  columns = [
    { name: 'alias', title: 'مستعار' },
    { name: 'keywords', title: '' },
    { name: 'description', title: '' },
    { name: 'country_id', title: ' ' },
    { name: 'city_id', title: ' ' },
    { name: 'start_at', title: ' ' },
    { name: 'end_at', title: ' ' },
    { name: 'period', title: ' ' },
    { name: 'price', title: ' قیمت' },
    { name: 'customer_package', title: ' ' },
    { name: 'partner_package', title: ' ' },

  ];

  constructor() { }

  ngOnInit() {
  }

}
