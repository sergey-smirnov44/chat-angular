import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsendComponent } from './btnsend.component';

describe('BtnsendComponent', () => {
  let component: BtnsendComponent;
  let fixture: ComponentFixture<BtnsendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnsendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
