import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointSimulationService } from '../../service/endpoint-simulation.service';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [CommonModule, JsonPipe, AsyncPipe],
  templateUrl: './async.component.html',
  styleUrl: './async.component.css',
})
export class AsyncComponent {
  endpointSimulationService = inject(EndpointSimulationService);

  data$: Observable<any> = this.endpointSimulationService.hitEndpoint();


  constructor() {
    // afterNextRender(() => {
    //   console.log(window.location.pathname);
    // });
  }
}
