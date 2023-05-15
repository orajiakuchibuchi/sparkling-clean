import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  @Input() title: string = 'Pop Up Notification';
  @Input() message: string = '';
  @Input() createdAt!: Date;
  @Input() shouldShow: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    if(!this.createdAt){
      this.createdAt = new Date(Date.now())
    }
  }

}
