import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Toode } from '../models/toode';
import { ToodeService } from '../services/toode.service';

@Component({
  selector: 'app-yks-toode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yks-toode.component.html',
  styleUrl: './yks-toode.component.css'
})
export class YksToodeComponent implements OnInit {
  toode!: Toode;

  constructor(
    private toodeService: ToodeService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const tooteNimi = this.route.snapshot.params["nimi"];
    if (tooteNimi === null){
      return;
    }
    const leitudToode = this.toodeService.tooted.find(t => t.nimi === tooteNimi);
    if (leitudToode !== undefined){
      this.toode = leitudToode;
    }
  }
}
