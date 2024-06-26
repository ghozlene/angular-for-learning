import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  id: number = 0;
  editMode = false;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.params.subscribe(params => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
    });

  }
}
