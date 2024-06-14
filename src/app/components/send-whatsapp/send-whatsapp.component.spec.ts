import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendWhatsappComponent } from './send-whatsapp.component';

describe('SendWhatsappComponent', () => {
  let component: SendWhatsappComponent;
  let fixture: ComponentFixture<SendWhatsappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendWhatsappComponent]
    });
    fixture = TestBed.createComponent(SendWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
