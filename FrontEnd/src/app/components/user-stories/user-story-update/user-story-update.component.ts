import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { User_story } from '../../../models/user_story.model';
import { ErrorHandlerService } from '../../../services/error-handler.service';

@Component({
  selector: 'app-user-story-update',
  templateUrl: './user-story-update.component.html',
  styleUrls: ['./user-story-update.component.css']
})
export class UserStoryUpdateComponent implements OnInit {
  
  id: number;
  weight: number;
  scrum_board_status: number;
  description: string;
  priority: number;
  sprint_id: number;

  constructor(private errorHandler:ErrorHandlerService, private crud:CrudService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = parseInt(this.route.snapshot.params.id);

    this.crud.retrieve(this.crud.models.USER_STORY, this.id)
    .subscribe(
      (res:User_story) => {
        console.log (res);

        this.weight = res.weight;
        this.scrum_board_status = res.scrum_board_status;
        this.description = String(res.description);
        this.priority = res.priority;
        this.sprint_id = res.sprint_id;
      },
      (err:HttpErrorResponse) => {
        this.errorHandler.handleError(err);
      }
    );

  }

  updateUserStory()
  {

    let body = {
      id: this.id,
      weight: this.weight,
      scrum_board_status: this.scrum_board_status,
      description: this.description,
      priority: this.priority,
      sprint_id: this.sprint_id
    };

    this.crud.update (this.crud.models.USER_STORY, this.id, body)  
    .subscribe (
      (res: Response) => {
        this.router.navigate(['home']);
      },
      (err:HttpErrorResponse) => {
        this.errorHandler.handleError(err);
      }
    );
  }
}
