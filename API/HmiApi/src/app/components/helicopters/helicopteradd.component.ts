import { Component, Inject, OnDestroy } from '@angular/core';
import { IHelicopterBase } from '../../models/IHelicopter';
import { HelicopterCrudService } from '../../services/helicopter.service'
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'helicopteradd',
    templateUrl: './helicopteradd.component.html'
})
export class HelicopterAddComponent implements OnDestroy{
    public hid: number;
    public form : FormGroup;
    private addSubs: Subscription;

    constructor(
        private helicopterService: HelicopterCrudService,
        private location: Location, 
        formBuilder: FormBuilder
    ){
        this.form = formBuilder.group({
            type: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(25)])],
            serialNumber: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])]
        });
    }

    ngOnDestroy(){
        if(this.addSubs){
            this.addSubs.unsubscribe();
        }
    }
    
    Save(form: any){
        let model: IHelicopterBase = form as IHelicopterBase;
        this.addSubs = this.helicopterService.Save(model).subscribe(()=>{
            this.location.back();
        });
    }

    goBack(){
        this.location.back();        
    }
}