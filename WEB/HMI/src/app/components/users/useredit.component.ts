import { Component, Inject, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRole } from '../../models/enums/IUserRole';
import { User, CreateUserModel } from '../../models/IUser';
import { CreateUserService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'useredit',
    templateUrl: './useredit.component.html'
})
export class UserEditComponent implements OnDestroy {
    public user: CreateUserModel;
    public userId: number;
    public form: FormGroup;
    private getSubs: Subscription;
    private editSubs: Subscription;

    constructor(
        private usersService: CreateUserService,
        private route: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group(
            {
                userName: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])],
                email: [null, Validators.compose([Validators.required, Validators.email])],
                role: [null, Validators.required]
            }
        );
        this.route.params.subscribe(params => {
            this.userId = +params['id'];
            console.log(this.userId);
            this.editSubs = this.usersService.Get(this.userId)
                .subscribe(u => {
                    this.user = u;
                    this.form = this.formBuilder.group(
                        {
                            userName: [this.user.userName, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])],
                            email: [this.user.email, Validators.compose([Validators.required, Validators.email])],
                            role: [this.user.role, Validators.required]
                        }
                    );
                }, (e: any) => {
                    console.log(e);
                });
        })
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
        let model: CreateUserModel = form as CreateUserModel;
        this.editSubs = this.usersService.Update(this.userId, model)
            .subscribe(() => {
                console.log("User updated!");
                this.location.back();
            }, (e: any) => {
                console.log(e);
            });
    }

    goBack() {
        this.location.back();
    }
}