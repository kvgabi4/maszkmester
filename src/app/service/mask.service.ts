import { Injectable } from '@angular/core';
import { Mask } from '../model/mask';


@Injectable({
  providedIn: 'root'
})
export class MaskService {

  masks: Mask[] = [
    {
      name: 'Ciao',
      description: 'Hidd el nekem , ennyiért ez nem pénzrablás.',
      price: 3990,
      image: '../assets/img/ciao.jpg'
    },
    {
      name: 'Spider',
      description: 'Ezzel a maszkkal mindenkit behálózol.',
      price: 4990,
      image: '../assets/img/spider.jpg'
    },
    {
      name: 'Lecter',
      description: 'Viselése igazán lebilincselő élmény.',
      price: 3990,
      image: '../assets/img/lecter.jpg'
    },
    {
      name: 'Hulk',
      description: 'Habár zöld, ezzel az arcodon, garantáltan nem tűnsz majd éretlennek.',
      price: 3990,
      image: '../assets/img/hulk.jpg'
    },
  ]
  constructor() {
    console.log(this.masks)
   }
}
