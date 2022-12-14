import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {

  constructor(private router: Router,private es:EvenementService) { }
  filterTerm:any;
  listevenements!:Event[];
  iduser=1;
  showLoader = true;
  ngOnInit(): void {
   
    this.es.FindAllEvenements().subscribe(
      (data)=>{
        this.showLoader=false;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        
        Toast.fire({
          icon: 'success',
          title: 'Events Successfully Loaded From The Database .'
        })
        this.listevenements=data;
console.log(data)
      },(error)=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        
        Toast.fire({
          title: 'Events<strong> Failed </strong>To Load From The Database',
          icon: 'error'
        })
      }
    )
  }
  Home(){
    this.router.navigate(['Home']);
  }
  JoinEvent(idevent:any){
    Swal.fire({
      title: '<strong>Join This Event ?</strong>',
      icon: 'info',
      html:
        'You can win <b>Points</b>, ' +
        'That will help you <b>RankUp</b> ' ,
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-plus"></i> Yes, i would like to Join! !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
        this.es.AffecterEventToUser(idevent,this.iduser).subscribe(
          (data)=>{
    console.log(data)
          },(error)=>{
            Swal.fire({
              title: '<strong>Oops!</strong>',
              icon: 'error',
              html:
                '<b>Error !</b> Something went wrong ' 
            }
            )
          }
        )
      
      } 
    }
    )
  }
  LikeEvent(idevent:any){
    Swal.fire({
      title: '<strong>Like This Event ?</strong>',
      icon: 'info',
      html:
        'You can <a href="/Evenements">Check your liked Events</a> <b>later</b>, ',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-heart"></i> Yes, I Like it !',
      confirmButtonAriaLabel: '',
      cancelButtonText:
        '<i class="fa fa-close"></i> No,I changed My mind',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.isConfirmed) {
        this.es.LikeEvent(idevent,this.iduser).subscribe(
          (data)=>{
    console.log(data)
          },(error)=>{
            Swal.fire({
              title: '<strong>Oops!</strong>',
              icon: 'error',
              html:
                '<b>Error !</b> Something went wrong ' 
            }
            )
          }
        )
      } 
    }
    )
  }

}
