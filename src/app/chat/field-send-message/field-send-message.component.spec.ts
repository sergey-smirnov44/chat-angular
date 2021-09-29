import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSendMessageComponent } from './field-send-message.component';

describe('FieldSendMessageComponent', () => {
  let component: FieldSendMessageComponent;
  let fixture: ComponentFixture<FieldSendMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldSendMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
