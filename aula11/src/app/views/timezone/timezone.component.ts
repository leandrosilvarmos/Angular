import { Component, OnInit } from '@angular/core';
import { TimezoneService } from 'src/app/services/timezone.service';
import { Horario } from 'src/app/model/timezone';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {


  inputZone: string;
  horario: Horario;


  constructor(private timeZone: TimezoneService) { }

  ngOnInit(): void {
  }

  consultartimeZone(){

      this.timeZone.ConsultarHorario(this.inputZone).subscribe(zone => {
        this.horario = zone;
      });

  }

}
