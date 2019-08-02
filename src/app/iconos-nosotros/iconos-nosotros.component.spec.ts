import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosNosotrosComponent } from './iconos-nosotros.component';

describe('IconosNosotrosComponent', () => {
  let component: IconosNosotrosComponent;
  let fixture: ComponentFixture<IconosNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconosNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconosNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
