import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnAppViewComponent } from './rn-app-view.component';

describe('RnAppViewComponent', () => {
  let component: RnAppViewComponent;
  let fixture: ComponentFixture<RnAppViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RnAppViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RnAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
