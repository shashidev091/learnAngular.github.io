import { Component } from '@angular/core'
import { ClassesService } from './classes/classes.service';

@Component({
    selector: 'courses',
    // template: '<h2>Courses</h2>'
    templateUrl: './course.component.html'
})
export class Course {
    
    title = 'List of classes'

    classes;

    constructor(service: ClassesService) {
        this.classes = service.getClasses();
    }
    
    getTitle() {
        return 'Hello Shashi';
      }
      
    imgUrl = 'https://images.unsplash.com/photo-1585573139865-fcc0aff09b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60';
      
    isactive = false;

    keyUp($event) {
        console.log("Enter was pressed")
        console.log($event.target.value)
    }

    secondKey(email) {
        console.log(email)
    }

    email = '';

    sampleData = {
        name: 'Shashi',
        marks: 13221,
        rating: 121.21,
        fees: 12311,
        texts: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quis nulla laudantium beatae vero? Nisi
                tempora quia itaque aut. Veritatis possimus totam nobis corporis, omnis iure consequuntur corrupti voluptate
                repellat!`
    }
       
}