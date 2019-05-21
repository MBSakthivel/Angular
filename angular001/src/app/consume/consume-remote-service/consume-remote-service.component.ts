import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import { FunctionExpr } from '@angular/compiler';

import { Router } from "@angular/router"

@Component({
  selector: 'app-consume-remote-service',
  templateUrl: './consume-remote-service.component.html',
  styleUrls: ['./consume-remote-service.component.css']
})
export class ConsumeRemoteServiceComponent implements OnInit {

  displayForm: boolean = false;
  displayUpdateForm: boolean = false;
  users: any = [];
  name = "";
  year = ""
  buttonLabel: string = "AddFriend";
  constructor(private remote: RemoteService, private router:Router) { }

  ngOnInit() {

    // this.remote.getRemoteUsers().subscribe(function(data){
    // console.log(data)
    // this.users=data
    // }
    // );
    this.getAllFriends();

  }
  getAllFriends() {
    this.remote.getRemoteUsers().subscribe((data) => {
      console.log(data)
      this.users = data
    }
    );
  }

  addFriends = function () {
    this.displayForm = true;
    this.buttonLabel = "Add";

  }
  saveFriend = function (something) {
    console.log(something)
    if (this.buttonLabel === "Add") {
      this.remote.saveFriend(something).subscribe((data) => {
        console.log("Add friends success");
        this.getAllFriends();
        this.displayForm = false;
      });
    }
    else if (this.buttonLabel === "Update") {
      console.log("update");
      this.remote.updateFriend(something).subscribe((data) => {
        this.getAllFriends();
        this.displayForm = false;
        this.displayUpdateForm = false;
      },
        (error) => {
          console.log("error")
          console.log(error);
        }
      );
    }
  }
  deleteFriend = function (currentFiredn) {
    console.log("deleting firnmed" + currentFiredn);
    this.remote.deleteFriend(currentFiredn).subscribe((data) => {
      console.log("friend deleted");
      this.getAllFriends();
    }
    );
  }

  updateFriend = function (id) {
    console.log(id);
    this.displayForm = true;
    this.buttonLabel = "Update";
    this.displayUpdateForm = true;
    this.displayForm = false;
    this.remote.getFriendbyId(id).subscribe((data) => {
      console.log(data);
      this.name = data.name;
      this.year = data.year;
      this.id = data.id;
    });
  }
  updateInSPA = function (id) {
    this.router.navigate(["/updateFriend",id]);
  }
}

