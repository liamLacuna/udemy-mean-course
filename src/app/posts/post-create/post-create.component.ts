import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
 
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';


  constructor(public postServices: PostsService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm){
    if(form.invalid) return;

    this.postServices.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
