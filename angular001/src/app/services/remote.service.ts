import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http: HttpClient) { }

  getRemoteUsers() {
    return this.http.get("http://localhost:3000/friends");
  }

  saveFriend(friend) {
    return this.http.post("http://localhost:3000/friends", friend);
  }
  deleteFriend(id) {
    return this.http.delete("http://localhost:3000/friends/" + id);
  }
  getFriendbyId(id) {
    return this.http.get("http://localhost:3000/friends/" + id);
  }
  updateFriend(friend) {
    console.log("service update");
    return this.http.put("http://localhost:3000/friends/" + friend.id, friend);
  }


}
