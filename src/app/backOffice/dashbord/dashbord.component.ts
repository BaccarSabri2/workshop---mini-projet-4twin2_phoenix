import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../assets/back/vendor/datatables/jquery.dataTables.min.js')
    this.loadScript('../assets/back/vendor/datatables/dataTables.bootstrap4.min.js')
    this.loadScript('../assets/back/js/demo/datatables-demo.js')
  }

}
