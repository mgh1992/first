import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from 'app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'article-categories-detail',
  templateUrl: './article-categories-detail.component.html',
  styleUrls: ['./article-categories-detail.component.scss']
})
export class ArticleCategoriesDetailComponent implements OnInit {
  form: FormGroup;
  disableBtn: boolean = false;
  selectedImage;
  editMode;
  id;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    if (this.id) {
      this.editMode = true;
    }
    this.form = new FormGroup({
      alias: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      blog: new FormControl(null, Validators.required)

    });

  }


  fileChangeEvent(fileInput: any) {
    this.disableBtn = true;

    if (fileInput.target.files && fileInput.target.files[0]) {

      const formData = new FormData();
      formData.append('file', fileInput.target.files[0]);

      this.api.uploadFile(formData)
        .subscribe(res => {

          if (res.success) {
            Swal.fire(
              'موفق',
              'بارگذاری با موفقیت انجام شد.',
              'success'
            );
            this.disableBtn = false;

          } else {
            Swal.fire(
              'نا موفق',
              'بارگذاری انجام نشد.',
            );
          }
          this.selectedImage = res.payload.url;
        }, err => {
          console.log(err);
        });
    }

  }


  onSubmit() {
    this.api.apiUrl = 'categories';

    if (this.form.get('status').value == null) {
      this.form.get('status').setValue(false);
    }

    if (!this.editMode) {
      this.api.addOne(this.form.value).subscribe(res => {
        this.disableBtn = false;
        if (res.success) {
          Swal.fire(
            'موفق',
            ' با موفقیت اضافه شد.',
            'success'
          );
          this.router.navigate(['']);
        } else {
        }

      }, err => {
        console.log(err);
      });
    }
    else {
      this.api.updateOne(this.id, this.form.value).subscribe(res => {
        if (res.success) {
          Swal.fire(
            'موفق',
            ' با موفقیت ویرایش شد.',
            'success'
          );
          this.router.navigate(['']);
        } else { }

      });
    }

  }

  onCancel() {
    this.router.navigate(['']);
  }



}
