import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-categories',
  templateUrl: './article-categories.component.html',
  styleUrls: ['./article-categories.component.scss']
})
export class ArticleCategoriesComponent implements OnInit {
  columns = [
    { name: 'alias', title: 'مستعار' },
    { name: 'title', title: 'عنوان' },
    { name: 'status', title: 'وضعیت' },
    { name: 'blog', title: 'بلاگ' },

  ]
  constructor() { }

  ngOnInit() {
  }

}
