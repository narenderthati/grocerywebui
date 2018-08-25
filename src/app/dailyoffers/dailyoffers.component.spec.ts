import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyoffersComponent } from './dailyoffers.component';

describe('DailyoffersComponent', () => {
  let component: DailyoffersComponent;
  let fixture: ComponentFixture<DailyoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
