import { Component, Input } from '@angular/core';
import { Link } from '../../../core/models/link/link';
import { ScrollService } from '../../../core/services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  @Input() linksFooter!: Link[];

  constructor(private scroll: ScrollService) { }

  go(url: string, event: Event) {
    event.preventDefault();
    const id = url.replace(/^#/, '');
    this.scroll.scrollTo(id);
  }
}