import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  columns = [
    { name: 'alias', title: 'مستعار' },
    { name: 'title', title: 'عنوان' },
    { name: 'status', title: 'وضعیت' },
    { name: 'continent', title: 'قاره' },
    { name: 'capital', title: 'وضعیت' },
    { name: 'currency', title: 'وضعیت' },
    { name: 'official_language', title: 'وضعیت' },
    { name: 'blog', title: 'بلاگ' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
