import { Component, OnDestroy } from '@angular/core';
import { IHelicopterBase } from '../../models/IHelicopter';
import { Router, ActivatedRoute } from '@angular/router';
import { HelicopterCrudService } from '../../services/helicopter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'helicopteredit',
    templateUrl: './helicopteredit.component.html'
})
export class HelicopterEditComponent implements OnDestroy {
    public form: FormGroup;
    public hid: number;
    private getSub: Subscription;
    private editSubs: Subscription;

    constructor(
        private helicopterService: HelicopterCrudService,
        private route: ActivatedRoute,
        private location: Location,
        formBuilder: FormBuilder) {

        this.form = formBuilder.group({
            type: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(25)])],
            serialNumber: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])]
        });

        this.route.params.subscribe(params => {
            this.hid = +params['hid'];
            this.getSub = this.helicopterService.Get(this.hid).subscribe(h => {
                this.form = formBuilder.group({
                    type: [h.type, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])],
                    serialNumber: [h.serialNumber, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])]
                });
            }, (e: any) => {
                console.log(e);
            });
        });
    }

    ngOnDestroy() {
        if (this.getSub) {
            this.getSub.unsubscribe();
        }

        if(this.editSubs){
            this.editSubs.unsubscribe();
        }
    }

    Save(form: any) {
        let model: IHelicopterBase = form as IHelicopterBase;
        this.editSubs = this.helicopterService.Update(this.hid, model)
            .subscribe(() => {
                this.goBack();
            }, (e: any) => {
                console.log(e);
            });
    }

    goBack() {
        this.location.back();
    }
}