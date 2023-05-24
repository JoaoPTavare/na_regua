import { Component, OnInit} from '@angular/core';
import { IonicModule,NavController, PopoverController,  } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class HomePage implements OnInit{

  public items = [
    {titulo:'Corte padrão'},
    {titulo:'Barba'},
    {titulo:'Sobrancelha' }
  ];

  public barbeariaLogo=[ {imagem:'img01.jpg'} ];
 
  public barberImg = '../../assets/imagens/';
 

  constructor(private PopoverController: PopoverController, private navCtrl: NavController) {}

  addItem(itens:any){
    itens.adicionado = true;
  }

  removeItem(itens:any){
    itens.adicionado = false;
  }
  ngOnInit() {
  }
}
