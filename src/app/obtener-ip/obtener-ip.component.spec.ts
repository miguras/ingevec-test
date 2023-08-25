import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerIpComponent } from './obtenerIP.component';

describe('ObtenerIpComponent', () => {
  let component: ObtenerIpComponent;
  let fixture: ComponentFixture<ObtenerIpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenerIpComponent]
    });
    fixture = TestBed.createComponent(ObtenerIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
