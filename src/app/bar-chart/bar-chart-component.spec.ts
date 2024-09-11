import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveChartComponent } from './bar-chart.component';

describe('WaveChartComponent', () => {
  let component: WaveChartComponent;
  let fixture: ComponentFixture<WaveChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaveChartComponent]
    });
    fixture = TestBed.createComponent(WaveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
