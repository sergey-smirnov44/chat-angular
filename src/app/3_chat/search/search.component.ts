import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import * as fromStore from '../../store/reducers'
import { SearchService } from 'src/app/core/services/search.service';

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
    private store: Store<fromStore.State>,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }


  getQuery(value: string) {
    this.searchService.searchFieldChanged(value)
  }

}


