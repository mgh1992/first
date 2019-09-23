import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

    @Input() address: string;
    @Input() columns: any;
    @Input() limit = 10;
    @Input() delete = true;
    @Input() edit = true;
    @Input() link = '';
    @Input() publish;
    showIconComment = [];
    page = {
        limit: this.limit,
        count: 0,
        offset: 0,
        orderBy: 'id',
        orderDir: 'desc',
        draw: 1
    };

    rows = [];

    // columns = [];
    my_messages = {
        'emptyMessage': '',
        'totalMessage': ''
    };
    constructor(private http: HttpClient, private api: ApiService, private router: Router) {
    }

    ngOnInit() {
        this.api.token = localStorage.getItem('token');
        this.pageCallback({ offset: 0 });
    }

    /**
     * Called whenever the user changes page
     *
     * check: https://swimlane.gitbooks.io/ngx-datatable/content/api/table/outputs.html
     */
    pageCallback(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
        this.page.offset = pageInfo.offset;
        this.reloadTable();
    }

    /**
     * Called whenever the user changes the sort order
     *
     * check: https://swimlane.gitbooks.io/ngx-datatable/content/api/table/outputs.html
     */
    sortCallback(sortInfo: { sorts: { dir: string, prop: string }[], column: {}, prevValue: string, newValue: string }) {
        // there will always be one "sort" object if "sortType" is set to "single"
        this.page.orderDir = sortInfo.sorts[0].dir;
        this.page.orderBy = sortInfo.sorts[0].prop;
        this.reloadTable();
    }

    /**
     * You will render the table once at the beginning in ngOnInit()
     * and then every time the page OR the sort order are changed
     */
    reloadTable() {

        // NOTE: those params key values depends on your API!
        let params = new HttpParams()
            // .set('orderColumn', `${this.page.orderBy}`)
            // .set('orderDir', `${this.page.orderDir}`)
            // .set('draw', `${this.page.offset}`)
            .set('length', `${this.page.limit}`)
            .set('draw', `${this.page.draw}`)
            .set('start', `${this.page.offset * this.page.limit}`);

        let c_index = 0;
        for (let i = 0; i < this.columns.length; i++) {
            params = params.append('columns[' + c_index + '][data]', this.columns[i].name);
            params = params.append('columns[' + c_index + '][name]', this.columns[i].name);
            params = params.append('columns[' + c_index + '][orderable]', 'true');
            params = params.append('columns[' + c_index + '][searchable]', 'true');
            params = params.append('columns[' + c_index + '][search][value]', '');
            params = params.append('columns[' + c_index + '][search][regex]', 'false');
            if (this.columns[i].name === this.page.orderBy) {
                params = params.append('order[0][column]', `${i}`);
                params = params.append('order[0][dir]', `${this.page.orderDir}`);
            }
            c_index++;
        }

        this.api.apiUrl = this.address;
        this.api.datatable(params)
            .subscribe((data) => {
                // NOTE: the format of the returned data depends on your API!
                this.page.count = data['recordsTotal'];
                this.rows = data['data'];
                if (this.rows)
                    this.rows.forEach(el => {
                        if (el.status == 0)
                            this.showIconComment[el.id] = false;
                        else
                            this.showIconComment[el.id] = true;

                    });

            });


        this.page.draw++;
    }


    onDelete(id) {
        Swal.fire({
            title: 'حذف شود؟  ',
            text: 'این فرآیند برگشت ناپذیر است.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4caf50',
            cancelButtonColor: '#d33',
            cancelButtonText: 'خیر',
            confirmButtonText: 'بله'
        }).then((result) => {
            if (result.value) {
                this.api.apiUrl = this.address;
                this.api.entityName = this.address;
                this.api.deleteOne(id)
                    .subscribe(res => {
                        if (res.success) {
                            this.reloadTable();
                            Swal.fire({
                                title: 'پاک شد!',
                                type: 'success'
                            })
                        }
                    }, err => {
                        console.log(err);
                    });

            }
        })

    }

    onPublish(id) {
        this.api.publishOne(id)
            .subscribe(res => {
                if (res.success) {
                    Swal.fire(
                        'موفق',
                        ' کامنت با موفقیت منتشر شد.',
                        'success'
                    );
                    this.showIconComment[id] = true;
                    this.router.navigate([this.address]);
                } else {
                    console.log('nashod');
                }

            }, err => {
                console.log(err);
            });
    }

    goToLinkPage(id, item) {
        switch (item) {
            case 'manager':
                this.router.navigate(['/manager-records']);
                this.api.managerRecordsId = id;
                break;

        }

    }
}
