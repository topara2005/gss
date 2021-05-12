import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { UserRole } from '../../models/enums/IUserRole';
import { User, CreateUserModel } from '../../models/IUser';
import { UsersService } from '../../services/users.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'userlist',
    templateUrl: './userlist.component.html'
})
export class UserListComponent implements OnInit, OnDestroy {
    users: User[];
    private getSubs: Subscription;
    private remSubs: Subscription;

    constructor(private usersService: UsersService, private router: Router) {

    }

    ngOnInit() {
        this.LoadUsers();
    }

    ngOnDestroy() {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }

        if (this.remSubs) {
            this.remSubs.unsubscribe();
        }
    }

    onEditUser(user: User) {
        this.router.navigate(['/users/', user.id, '/edit']);
    }

    Remove(id: number, confirmModal: ModalDirective) {
        this.remSubs = this.usersService.Remove(id)
            .subscribe(() => {
                confirmModal.hide();
                this.LoadUsers();
            }, (e: any) => {
                console.log(e);
            });
    }

    private LoadUsers() {
        this.getSubs = this.usersService.GetList()
            .subscribe(u => {
                this.users = u;
            }, (e: any) => {
                console.log(e);
            });
    }
}