import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  providers: [DataService],
  selector: 'app-postari',
  templateUrl: './postari.component.html',
  styleUrls: ['./postari.component.scss']
})
export class PostariComponent implements OnInit {

  postari$: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.daPostari().subscribe(
      data => this.postari$ = data
    )
  }

}
