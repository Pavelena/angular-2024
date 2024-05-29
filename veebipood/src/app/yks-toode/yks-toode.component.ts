import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { Toode } from '../models/toode';
import { ToodeService } from '../services/toode.service';

@Component({
  selector: 'app-yks-toode',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './yks-toode.component.html',
  styleUrl: './yks-toode.component.css'
})
export class YksToodeComponent implements OnInit {
  toode!: Toode;
  isLoading = true;

  constructor(
    private toodeService: ToodeService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const tooteNimi = this.route.snapshot.params["nimi"];
    if (tooteNimi === null){
      return;
    }
    this.toodeService.saaTooted().subscribe(vastus => {
      const leitudToode = vastus.find(t => t.nimi === tooteNimi);
      if (leitudToode !== undefined){
        this.toode = leitudToode;
      }
      this.isLoading = false;
    });
  }
}
