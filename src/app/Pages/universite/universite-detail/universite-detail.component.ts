import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Universite } from '../model/universite';
import { ActivatedRoute } from '@angular/router';
import { UniversiteService } from '../service/universite.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Avis } from '../model/avis';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-universite-detail',
  templateUrl: './universite-detail.component.html',
  styleUrls: ['./universite-detail.component.css']
})
export class UniversiteDetailComponent implements OnInit {
  list : Universite[]=[];
  listAvis:Avis[]=[];
  id : number | undefined ;
  universite : Universite = new Universite();
  commentaire:any;
  myForm:FormGroup;
  avis : Avis = new Avis();
  element: HTMLElement;
  constructor(private ac : ActivatedRoute,private us:UniversiteService) { }

  
  ngOnInit(): void {
    this.createForm(new Avis());
    this.ac.paramMap.subscribe(result=>{ this.id=+Number(result.get('id'));
    console.log(this.id);
    this.us.getUniversite(this.id).subscribe(res=>{
      this.universite=res;
      //console.log(this.universite);
     // this.list.push(this.universite);
     this.listAvis=this.universite.avis;
     this.listAvis.reverse();

    })
  });


    
   // this.list.
 
  }
  

  createForm(avis){
    this.myForm=new FormGroup({
      autres:new FormGroup({
     
      commentaire:new FormControl(avis.commentaire,[Validators.required, Validators.minLength(10)]),
      
    })
    })
  }
 checkWord(word:string)  {
  var a=false;
  this.us.checkWord(word).subscribe(res=>{
    console.log(res)
    
    if(res==true){
      a = true
    }else{
      a = false
    }
   
   })
   return a
}
  saveAvis(){
    var word = this.myForm.controls['autres'].get('commentaire').value;
    this.us.checkWord(word).subscribe(res=>{
      console.log(res)
      
      if(res==true){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'INTERDIT!',
          footer: '<a href="">Cest interdit dutiliser des gros mot!</a>'
        });
        this.myForm.controls['autres'].get('commentaire').setErrors({'incorrect': true})
      }else{
        this.avis.commentaire=this.myForm.controls['autres'].get('commentaire').value;
        this.us.addAvis(this.avis,2,this.id).subscribe(res=>{
        
    });
    window.location.reload();
      }
     
     })
    
  }

  
  onKeyUp(x:any) { // appending the updated value to the variable
    var text = x.target.value;
    this.us.checkWord(text).subscribe(res=>{
      if(res==true){
         
      }
    })
    
  }

  test(){
    return true
  }
  

  



}
