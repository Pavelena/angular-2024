import { Component } from '@angular/core';
import { Pakiautomaat } from '../../models/pakiautomaat';
import { PakiautomaadidService } from '../../services/pakiautomaadid.service';

@Component({
  selector: 'app-pakiautomaadid',
  standalone: true,
  imports: [],
  templateUrl: './pakiautomaadid.component.html',
  styleUrl: './pakiautomaadid.component.css'
})
export class PakiautomaadidComponent {
  pakiautomaadid: Pakiautomaat[] = [];

  constructor (
    private pakiautomaadidService: PakiautomaadidService
  ){}

  ngOnInit() {
    this.pakiautomaadidService.saaPaakiautomaadid().subscribe(vastus => this.pakiautomaadid = vastus.filter(e => e.A0_NAME === "EE"))
  }
}
