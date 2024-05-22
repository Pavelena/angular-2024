import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toode } from '../models/toode';
import { ToodeService } from '../services/toode.service';

@Component({
  selector: 'app-muuda-toode',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './muuda-toode.component.html',
  styleUrl: './muuda-toode.component.css'
})
export class MuudaToodeComponent implements OnInit {
  toode!: Toode;
  muudaToodeVorm!: FormGroup;
  index!: number;

  constructor(
    private toodeService: ToodeService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const tooteNimi = this.route.snapshot.params["nimi"];
    if (tooteNimi === null){
      return;
    }
    const leitudToode = this.toodeService.tooted.find(t => t.nimi === tooteNimi);
    if (leitudToode !== undefined){
      this.toode = leitudToode;
      this.index = this.toodeService.tooted.indexOf(leitudToode);
      this.muudaToodeVorm = new FormGroup({
        "nimi": new FormControl(leitudToode.nimi, [Validators.required, Validators.minLength(4)]),
        "hind": new FormControl(leitudToode.hind),
        "aktiivne": new FormControl(leitudToode.aktiivne),
        "pilt": new FormControl(leitudToode.pilt)
      });
    }
    
  }
  muuda(){
    this.toodeService.tooted[this.index] = this.muudaToodeVorm.value;
    this.router.navigateByUrl('/halda');
  }
}
