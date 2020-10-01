import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-fcm',
  templateUrl: './fcm.component.html',
  styleUrls: ['./fcm.component.scss']
})
export class FcmComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.form = _fb.group({
      nome: _fb.control(""),
      idade: _fb.control(0)
    });
  }

  ngOnInit(): void {
  }

  get nome(): AbstractControl {
    return this.form.get("nome");
  }

  get idade(): AbstractControl {
    return this.form.get("idade");
  }

  get idadeValida(): boolean {
    return this.idade.value > 0 && this.idade.value < 220;
  }

  get maxima(): number {
    return this.idadeValida ? 220 - this.idade.value : 0;
  }

  get condicionamento(): number {
    return this.idadeValida ? (220 - this.idade.value) * 0.80 : 0;
  }

  get queima(): number {
    return this.idadeValida ? (220 - this.idade.value) * 0.65 : 0;
  }

  textoMotivacional() {
    let texto = "";
    if (this.idade.value > 0) {
      if (this.idade.value < 20) {
        texto = " você tem a juventude à sua disposição!";
      } else if (this.idade.value < 40) {
        texto = " bora manter a atividade porque temos muito a perder!";
      } else if (this.idade.value < 60) {
        texto = " chegamos num ponto onde não temos mais escolha! Pratique atividade física!";
      } else if (this.idade.value < 80) {
        texto = " ainda dá tempo de tentar esticar um pouco a qualidade de vida, vamos nos exercitar!";
      } else if (this.idade.value < 100) {
        texto = " espero que tenha feito algo por você nesse tempo!";
      } else if (this.idade.value < 150) {
        texto = " ainda por aqui?!!?";
      } else {
        texto = " tá de brincadeira né?";
      }
      texto = `${this.nome.value}, ${texto}`;
    }
    return texto;
  }
}
