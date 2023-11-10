import './style.css'
import { Statue } from './Statue'
import { Artwork } from './Artwork';

let list : Artwork[] = [];

function Add() : void{
  let nev = (document.getElementById('nev')! as HTMLInputElement).value;
  let ev = parseInt((document.getElementById('ev')! as HTMLInputElement).value);
  let ar = parseInt((document.getElementById('ar')! as HTMLInputElement).value);
  let magassag = parseInt((document.getElementById('magassag')! as HTMLInputElement).value);

  list.push(new Statue(nev,ev,ar,magassag));
  reset();
  update();
  alert("Sikeres adatfelvétel");  
}

function reset(){
  let nev = document.getElementById('nev') as HTMLInputElement;
  let ev = document.getElementById('ev') as HTMLInputElement;
  let ar = document.getElementById('ar') as HTMLInputElement;
  let magassag = document.getElementById('magassag') as HTMLInputElement;
  let hiba = document.getElementById('hiba') as HTMLInputElement;

  nev.value = "";
  ev.value = "";
  ar.value = "";
  magassag.value = "";
  hiba.textContent = "";
}

function update() {
  let db = document.getElementById('db') as HTMLElement;
  let sum = document.getElementById('sum') as HTMLElement;

  db.textContent = "A művek darabszáma: " + list.length;
  let ossz = 0;
  list.forEach((a) => {
    ossz += a.price;
  })
  sum.textContent = "A művek összára: " + ossz;
}

document.addEventListener('DOMContentLoaded',() =>{
  document.getElementById('submit')?.addEventListener('click',Add);
  let ev = document.getElementById('ev') as HTMLInputElement;
  ev.max = new Date().getFullYear().toString();
})