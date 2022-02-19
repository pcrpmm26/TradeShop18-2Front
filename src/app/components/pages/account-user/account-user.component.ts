import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.css']
})
export class AccountUserComponent implements OnInit {
  member:any;
  searchForm!: FormGroup;

  constructor(private service : MemberService, private router : Router) { }

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      name: new FormControl()
    });

    this.service.getMember().subscribe((res: any)=>{
      this.member = res.data;
    })
  }

}
