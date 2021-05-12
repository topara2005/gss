import { Component, Inject, OnDestroy } from '@angular/core';
import { IHardwarePartNumber } from '../../models/IPartNumber';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HardwarePartNumberService } from '../../services/hardware.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'hardwareadd',
    templateUrl: './hardwareadd.component.html'
})
export class HardwareAddComponent implements OnDestroy {
    public hid: number;
    public form: FormGroup;

    private addSubs: Subscription;

    constructor(formBuilder: FormBuilder,
        private service: HardwarePartNumberService,
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
        let model: IHardwarePartNumber = form as IHardwarePartNumber;
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