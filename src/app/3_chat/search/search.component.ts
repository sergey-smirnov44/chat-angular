import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import * as FromMessage from 'src/app/store/actions'
import { cdkVariables } from '@angular/material/schematics/ng-update/migrations/theming-api-v12/config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue$: Observable<string>
  @Input() searchValue
  @Input() message: Message[]

  constructor(
    private store: Store<Message>
  ) { }

  ngOnInit(): void {
  }


  searchFieldChanged(value: string) {
    // this.store.dispatch(FromMessage.FromMessage.searchMessage({ query: value }))
    // console.log(value)

  }
}


