import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


export interface posts{
  body: string,
  title: string,
  id: number,
  userId: number
}

@Component({
  selector: 'app-network-con',
  templateUrl: './network-con.component.html',
  styleUrls: ['./network-con.component.css']
})
export class NetworkConComponent implements OnInit {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';
  postElements:Observable<any> ;
  postE;

  objectsOf: [posts] = [{body:'', title: '', id : 0 , userId: 0}];

  constructor( private http: HttpClient) { 
    // http.get(this.ROOT_URL).subscribe(response => {
    //   console.log(response)
    // })
  }

  public print() {
    console.log(this.postElements)
  }

    getPosts() {
    // let aa = this.http.get(this.ROOT_URL);
    // console.log(aa);
    // aa.subscribe((b) => {
    //   this.postElements = b;
    //   console.log(b[0]);
    // })
    // const bb = aa.toPromise((resolve, reject) => {
    //   resolve(()=> {
        
    //   })
    // } )

      this.postElements = this.http.get(this.ROOT_URL);
      // this.postElements.toPromise().then((test:[posts]) => {
      //   test.map((title) => {
      //     console.log(title.body);
      //   })
      // })

      this.postElements.toPromise().then( (dataa:[posts]) => {
        dataa.forEach(da => {
          this.objectsOf.push(da);
        })
      })

      console.log(this.objectsOf)
  }

 

  public createPost(input: HTMLInputElement) {
    this.postE = { title: input.value }
    this.http.post(this.ROOT_URL, JSON.stringify(this.postE))
      .subscribe(res => {
        this.postE['id'] = res;
        console.log(this.postE);
        console.log(res)
      })
  }

  public getPostTwo() {
    this.http.get(this.ROOT_URL)
      .subscribe(response => {
        let a:any = response;
        a.forEach(aa => {
          if(aa.id < 10) {
            console.log(aa.body);
          }
        })
      })
  }

  ngOnInit(): void {
    this.http.get(this.ROOT_URL).subscribe(response => {
      console.log(response[12].body)
    })
  }

}
