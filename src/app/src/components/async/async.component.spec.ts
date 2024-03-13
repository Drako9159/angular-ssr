import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComponent } from './async.component';
import { EndpointSimulationService } from '../../service/endpoint-simulation.service';
import { HttpClientModule } from '@angular/common/http';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncComponent, HttpClientModule],
      providers: [EndpointSimulationService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
