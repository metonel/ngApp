import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  providers: [DataService],
  selector: 'app-useri',
  templateUrl: './useri.component.html',
  styleUrls: ['./useri.component.scss']
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
