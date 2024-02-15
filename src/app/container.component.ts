import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  contentChildren,
} from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    @for (value of values(); track $index) {
      <ng-container [ngTemplateOutlet]="value" />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  values = contentChildren<TemplateRef<HTMLElement>>('containerTemplate');
}
