import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MetadataModel, RootMetaDataModel } from './models/metadata-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public projects: MetadataModel[] = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<RootMetaDataModel>('assets/data.json')
    .subscribe(data => this.projects = data.projects);
  }
}
