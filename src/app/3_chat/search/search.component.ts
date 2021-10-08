import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue$: Observable<string>
  @Input() searchValue

  constructor(
    private store: Store<Message>
  ) { }

  ngOnInit(): void {
  }



  searchFieldChanged(value: string) {
  // this.store.dispatch()
  }
}
