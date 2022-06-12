import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: any = {};

  constructor(private readonly request: RequestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProfileData();
  }

  private async getProfileData(): Promise<void> {
    const id = this.route.snapshot.queryParams['id'] || 0;
    console.log(id);
    this.request.getData(+id).then((response: any) => {
      this.profile = response;
    }).catch((error) => {
      console.log(error);
    })
  }
}
