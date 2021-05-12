import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../../models/enums/IUserRole';
import { User, CreateUserModel } from '../../models/IUser';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'useradd',
    templateUrl: './useradd.component.html'
})
export class UserAddComponent implements OnDestroy {
    public form: FormGroup;
    private addSubs: Subscription;

    constructor(formBuilder: FormBuilder,
        private usersService: UsersService,
        private location: Location) {
        this.form = formBuilder.group({
            userName: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])],
            email: [null, Validators.compose([Validators.required, Validators.email])],
            role: [UserRole.Standard, Validators.required],
            password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
            confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
        }, {
                validator: PasswordValidator.MatchPassword
            });
    }

    ngOnDestroy() {
        if (this.addSubs) {
            this.addSubs.unsubscribe();
        }
    }

    Save(form: any) {
        let model: CreateUserModel = form as CreateUserModel;
        this.addSubs = this.usersService.Save(model)
            .subscribe(() => {
                console.log("User saved!");
                this.location.back();
            }, (e: any) => {
                console.log(e);
            });
    }

    goBack() {
        this.location.back();
    }
}