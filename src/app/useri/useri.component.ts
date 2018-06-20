import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  providers: [DataService],
  selector: 'app-useri',
  templateUrl: './useri.component.html',
  styleUrls: ['./useri.component.scss'],
  animations :[
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms', 
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'})))
        ], { optional: true }),
        query(':leave', animate('50ms', style({ opacity: 0 })), 
        { optional: true })
      ])
    ])
  ]
})
export class UseriComponent implements OnInit {

  useri$: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.daUseri().subscribe(
      data => this.useri$ = data
    )
  }

}
