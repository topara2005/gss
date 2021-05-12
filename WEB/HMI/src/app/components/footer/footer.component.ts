import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public get ShowFooter(): boolean {
    let token = this.sessionService.GetToken();
    return token != "";
  }

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

}
