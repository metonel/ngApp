import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  providers: [DataService],
  selector: 'app-detalii',
  templateUrl: './detalii.component.html',
  styleUrls: ['./detalii.component.scss']
})
export class DetaliiComponent implements OnInit {

  user$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params.id);
   }

  ngOnInit() {
    this.data.daUser(this.user$).subscribe(
      data => this.user$ = data
    )
  }

}
