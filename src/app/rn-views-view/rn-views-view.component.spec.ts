import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnViewsViewComponent } from './rn-views-view.component';

describe('RnViewsViewComponent', () => {
  let component: RnViewsViewComponent;
  let fixture: ComponentFixture<RnViewsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RnViewsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RnViewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
