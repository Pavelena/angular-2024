import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Kategooria } from '../models/kategooria';
import { Toode } from '../models/toode';
import { KategooriaService } from '../services/kategooria.service';
import { ToodeService } from '../services/toode.service';

@Component({
  selector: 'app-muuda-toode',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './muuda-toode.component.html',
  styleUrl: './muuda-toode.component.css'
})
export class MuudaToodeComponent implements OnInit {
  toode!: Toode;
  muudaToodeVorm!: FormGroup;
  index!: number;
  private tooted: Toode[] = [];
  kategooriad: Kategooria[] = [];

  constructor(
    private toodeService: ToodeService,
    private kategooriaService: KategooriaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const tooteNimi = this.route.snapshot.params["nimi"];
    if (tooteNimi === null){
      return;
    }
    this.kategooriaService.saaKategooriad().subscribe(vastus => this.kategooriad = vastus);

    this.toodeService.saaTooted().subscribe(vastus => {
      this.tooted = vastus;
      const leitudToode = vastus.find(t => t.nimi === tooteNimi);
      if (leitudToode !== undefined){
        this.toode = leitudToode;
        this.index = vastus.indexOf(leitudToode);
        
        this.muudaToodeVorm = new FormGroup({
          "nimi": new FormControl(leitudToode.nimi, [Validators.required, Validators.minLength(4)]),
          "hind": new FormControl(leitudToode.hind),
          "aktiivne": new FormControl(leitudToode.aktiivne),
          "pilt": new FormControl(leitudToode.pilt),
          "kategooria": new FormControl(leitudToode.kategooria)
        });
      }
    });
  }
  muuda(){
    this.tooted[this.index] = this.muudaToodeVorm.value;
    this.toodeService.uuendaTooted(this.tooted).subscribe(()=> this.router.navigateByUrl('/halda'));
    // this.toodeService.tooted[this.index] = this.muudaToodeVorm.value;
    
  }
}
