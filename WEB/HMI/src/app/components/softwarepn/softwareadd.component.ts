import { Component, Inject, OnDestroy } from '@angular/core';
import { ISoftwarePartNumber } from '../../models/IPartNumber';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SoftwarePartNumberService } from '../../services/software.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'softwareadd',
    templateUrl: './softwareadd.component.html'
})
export class SoftwareAddComponent implements OnDestroy {
    public hid: number;
    public form: FormGroup;

    private addSubs: Subscription;

    constructor(formBuilder: FormBuilder,
        private service: SoftwarePartNumberService,
        private location: Location,
        router: ActivatedRoute) {
        this.form = formBuilder.group({
            name: [null, Validators.compose([Validators.required])],
            number: [null, Validators.compose([Validators.required])]
        });

        router.params.subscribe(params => this.hid = +params['hid']);
    }

    ngOnDestroy() {
        if (this.addSubs) {
            this.addSubs.unsubscribe();
        }
    }

    Save(form: any) {
        let model: ISoftwarePartNumber = form as ISoftwarePartNumber;
        if (model) {
            model.helicopterId = this.hid;
            this.addSubs = this.service.Save(model)
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