import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Link } from '../../../core/models/link/link';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  @Input() linksFooter!: Link[];
}