import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailContatoComponent } from './email-contato.component';

describe('EmailContatoComponent', () => {
  let component: EmailContatoComponent;
  let fixture: ComponentFixture<EmailContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
