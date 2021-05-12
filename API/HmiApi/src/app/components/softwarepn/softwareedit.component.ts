import { Component, Inject, OnDestroy } from '@angular/core';
import { ISoftwarePartNumber } from '../../models/IPartNumber';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SoftwarePartNumberService } from '../../services/software.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'softwareedit',
    templateUrl: './softwareedit.component.html'
})
export class SoftwareEditComponent implements OnDestroy {
    id: number;
    public hid: number;
    public form: FormGroup;

    private getSubs: Subscription;
    private editSubs: Subscription;

    constructor(formBuilder: FormBuilder,
        private service: SoftwarePartNumberService,
        private location: Location,
        router: ActivatedRoute) {
        this.form = formBuilder.group({
            name: [null, Validators.compose([Validators.required])],
            number: [null, Validators.compose([Validators.required])]
        });

        router.params.subscribe(params => {
            this.id = +params['id'];
            this.hid = +params['hid'];
            this.getSubs = this.service.Get(this.id)
                .subscribe(h => {
                    this.hid = h.helicopterId;
                    this.form = formBuilder.group({
                        name: [h.name, Validators.compose([Validators.required])],
                        number: [h.number, Validators.compose([Validators.required])]
                    });
                }, (e: any) => {
                    console.log(e);
                });
        });
    }

    ngOnDestroy() {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }

        if (this.editSubs) {
            this.editSubs.unsubscribe();
        }
    }

    Save(form: any) {
        let model: ISoftwarePartNumber = form as ISoftwarePartNumber;
        if (model) {
            model.helicopterId = this.hid;
            this.editSubs = this.service.Update(this.id, model)
                .subscribe(() => {
                    this.goBack();
                }, (e: any) => {
                    console.log(e);
                });
        }
    }

    goBack() {
        this.location.back();
    }
}