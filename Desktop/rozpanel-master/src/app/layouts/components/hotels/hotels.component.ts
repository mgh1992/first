import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  columns = [
    { name: 'alias', title: 'مستعار' },
    { name: 'title', title: 'عنوان' },
    { name: 'status', title: 'وضعیت' },
    { name: 'blog', title: ' بلاگ' },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
