import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarIpComponent } from './mostrar-ip.component';

describe('MostrarIpComponent', () => {
  let component: MostrarIpComponent;
  let fixture: ComponentFixture<MostrarIpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarIpComponent]
    });
    fixture = TestBed.createComponent(MostrarIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
