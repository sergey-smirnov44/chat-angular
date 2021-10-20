import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, of, Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { Search } from 'src/app/core/common/3_chat/search.interface';
import * as fromStore from '../../store/reducers'
import { FromEntityChannel } from 'src/app/store/actions';
import { ofType } from '@ngrx/effects';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {

  constructor(
    private store: Store<fromStore.State>,

  ) { }
  searchValue$: Observable<string>

  @Input() message: Message[]
  searchField: string;
  mess: Subscription
  fieldSearch: any;
  keyUp$: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

  ngOnInit(): void {

    this.keyUp$.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    )
      .subscribe( (data) =>
    this.store.dispatch(FromEntityChannel.getValueSearch({ searchValue:  data})), error => error.toString());
        // this.store.dispatch(FromEntityChannel.getValueSearch({ searchValue: this.keyUp$.event.target.value })), error => error);
      // .subscribe( )
  };
  }


