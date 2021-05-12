import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { IHelicopterInfo, IHelicopterBase } from '../../models/IHelicopter';
import { HelicopterService, HelicopterCrudService } from '../../services/helicopter.service';
import { AppConfig } from '../../services/app-config.service';
import { PollingService } from '../../services/polling.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'helicopterlist',
    templateUrl: './helicopterlist.component.html'
})
export class HelicopterListComponent implements OnInit, OnDestroy {
    public helicopters: IHelicopterInfo[];
    private getSubs: Subscription;
    private remSub: Subscription;

    constructor(private service: HelicopterCrudService,
        private pollingService: PollingService, private config: AppConfig) {
    }

    ngOnInit() {
        this.LoadHelicopters();
    }

    ngOnDestroy() {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }

        if(this.remSub){
            this.remSub.unsubscribe();
        }
    }

    private LoadHelicopters() {
        this.getSubs = this.pollingService.Listening<IHelicopterInfo>(this.config.Helicopters)
            .subscribe(h => {
                this.helicopters = h;
            }, (e: any) => {
                console.log(e);
            });
    }

    Remove(id: number, confirmModal: ModalDirective) {
       this.remSub = this.service.Remove(id).subscribe(() => {
            confirmModal.hide();
            this.LoadHelicopters();
        }, (e: any) => {
            console.log(e);
            confirmModal.hide();
        });
    }
}