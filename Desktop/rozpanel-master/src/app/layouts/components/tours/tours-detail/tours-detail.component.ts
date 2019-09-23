import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.scss']
})
export class ToursDetailComponent implements OnInit {

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
      keywords: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      country_id: new FormControl(null, Validators.required),
      city_id: new FormControl(null, Validators.required),
      start_at: new FormControl(null, Validators.required),
      end_at: new FormControl(null, Validators.required),
      period: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      customer_package: new FormControl(null, Validators.required),
      partner_package: new FormControl(null, Validators.required),
    });

  }



  onSubmit() {
    this.api.apiUrl = 'tours';


    if (!this.editMode) {
      this.api.addOne(this.form.value).subscribe(res => {
        this.disableBtn = false;
        if (res.success) {
          Swal.fire(
            'موفق',
            ' تور با موفقیت اضافه شد.',
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
            ' تور با موفقیت ویرایش شد.',
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
