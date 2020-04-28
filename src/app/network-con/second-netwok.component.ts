import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { posts } from './network-con.component'

@Component({
    selector: 'second-network-compo',
    templateUrl: './second-network.component.html',
    styleUrls: ['./network-con.component.css']
})
export class SecondNetworkComponent implements OnInit{
    hello: string = "heloooooo"
    readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';
    readonly Second_url = "https://reqres.in/api/users?page=2";
    public dataFromServer: posts[];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<posts[]>(this.ROOT_URL).toPromise().then(res => {
         let a = res;
         this.dataFromServer = a;
        //  console.log(this.dataFromServer)
        })
    }

    public thisIsGreat() {
        
    }
}