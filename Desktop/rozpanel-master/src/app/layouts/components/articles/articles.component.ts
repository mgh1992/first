import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  columns = [
    { name: 'alias', title: 'مستعار' },
    { name: 'title', title: 'عنوان' },
    { name: 'status', title: 'وضعیت' },
    { name: 'blog', title: 'بلاگ' },
    { name: 'category_id', title: 'دسته بندی مقالات' },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
