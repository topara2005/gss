import { Component, OnDestroy } from '@angular/core';
import { IHardwarePartNumber } from '../../models/IPartNumber';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HardwarePartNumberService } from '../../services/hardware.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'hardwarelist',
    templateUrl: './hardwarelist.component.html'
})
export class HardwareListComponent implements OnDestroy {
    public list: IHardwarePartNumber[];
    public hid: number;
    private getSubs: Subscription;
    private remSubs: Subscription;

    constructor(
        private location: Location,
        router: ActivatedRoute,
        private service: HardwarePartNumberService) {
        router.params.subscribe(params => {
            this.hid = +params['hid'];
            this.load();
        });
    }

    ngOnDestroy(){
        if(this.getSubs){
            this.getSubs.unsubscribe();
        }

        if(this.remSubs){
            this.remSubs.unsubscribe();
        }
    }

    goBack() {
        this.location.back();
    }

    Remove(id: number, confirmModal: ModalDirective) {
        this.remSubs = this.service.Remove(id).subscribe(()=> {
            confirmModal.hide();
            this.load();
        },(e: any) => {
            console.log(e);
            confirmModal.hide();
        });
    }

    private load(){
        this.service.GetByHelicopter(this.hid).subscribe(data => {
            this.list = data;
        }, err => console.log(err));
    }
}