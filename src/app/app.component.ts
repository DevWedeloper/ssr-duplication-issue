import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent } from './container.component';
import { ExampleComponent } from './example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExampleComponent, ContainerComponent],
  template: `
    <app-example />
    <app-container>
      <ng-template #containerTemplate>
        <div>Hello World</div>
      </ng-template>
    </app-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
