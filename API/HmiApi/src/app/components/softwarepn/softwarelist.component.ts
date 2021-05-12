import { Component, OnDestroy } from '@angular/core';
import { ISoftwarePartNumber } from '../../models/IPartNumber';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SoftwarePartNumberService } from '../../services/software.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'softwarelist',
    templateUrl: './softwarelist.component.html'
})
export class SoftwareListComponent {
    public list: ISoftwarePartNumber[];
    hid: number;
    private getSub: Subscription;
    private remSub: Subscription;

    constructor(
        private location: Location,
        router: ActivatedRoute,
        private service: SoftwarePartNumberService) {
        router.params.subscribe(params => {
            this.hid = +params['hid'];
            this.load();
        });
    }

    ngonDestroy() {
        if (this.getSub) {
            this.getSub.unsubscribe();
        }

        if (this.remSub) {
            this.remSub.unsubscribe();
        }
    }

    goBack() {
        this.location.back();
    }

    Remove(id: number, confirmModal: ModalDirective) {
        this.remSub = this.service.Remove(id)
            .subscribe(() => {
                confirmModal.hide();
                this.load();
            }, (e: any) => console.log);
    }

    private load() {
        this.getSub = this.service.GetByHelicopter(this.hid)
            .subscribe(list => {
                this.list = list;
            }, (e: any) => {
                console.log(e);
            });
    }
}