import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-updatefriend',
  templateUrl: './updatefriend.component.html',
  styleUrls: ['./updatefriend.component.css']
})
export class UpdatefriendComponent implements OnInit {
  id:any;
  name:any;
  year:any;
  friend:any=[];
  updateFirned:any
  constructor(private remote:RemoteService, private activeRoute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    console.log(this.activeRoute);
    console.log(this.activeRoute.snapshot.params.myid);
    this.remote.getFriendbyId(this.activeRoute.snapshot.params.myid).subscribe((data)=>
    {
      //this.updateFirned=JSON.stringify(data);
      console.log("Success1");
      console.log(data);
      //console.log(this.updateFirned);
      this.friend = data.valueOf()
      this.id=this.friend.id;
      this.name=this.friend.name;
      this.year=this.friend.year;
      
    },
    (error)=>
    {
        this.updateFirned=JSON.stringify(error);
    });
  }

  saveFriend=function(friend){
    this.remote.updateFriend(friend).subscribe((data)=>{
        console.log("success1");
        this.route.navigate(["/consumeRemote"]);
    });

  }

}
