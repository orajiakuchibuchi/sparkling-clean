import { NetworkService } from './services/network.service';

import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'LAS LAS';
  constructor(
    private networkService: NetworkService,
              private router: Router) {
                // this.router.events.subscribe((e : RouterEvent) => {
                this.router.events.subscribe((e : any) => {
                 
                })
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.networkService.monitor();
  }
  te(obj:any){
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    
    console.log(event)
  }


}
