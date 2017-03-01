import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterOutletMap, Router, RouterModule, ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ShowTaskComponent} from "./showTask.component";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import {HttpModule} from "@angular/http";
import {Task} from "../task";

describe('ShowComponent', function () {
  let de: DebugElement;
  let comp: ShowTaskComponent;
  let fixture: ComponentFixture<ShowTaskComponent>;
  let service: AppService;
  let data: Task[];

  class MockRouter {
    navigate(): Promise<boolean> {
      return Promise.resolve(true)
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTaskComponent ],
      providers: [{provide: Router, useClass: MockRouter},RouterOutletMap,AppService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTaskComponent);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('h1'));
    data = [{
      date: 'aa',
      title: '',
      description: '',
      priority: '',
        _id: ''
    }]
    service = fixture.debugElement.injector.get(AppService)
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('be able to get data from service', () => {
    spyOn(service, 'getData').and.returnValue(
      Observable.of<any>(
        // [{
        //   date: 'aa',
        //   title: '',
        //   description: '',
        //   priority: ''
        // }]
        data
      )
    );
    comp.ngOnInit();
    expect(comp.data).toEqual([{
      date: 'aa',
      title: '',
      description : '',
      priority : '',
      _id: ''
    }])
  });

  it('be able to delete data from service', () => {
    spyOn(service, 'removeData').and.returnValue(
      Observable.of<any>(
        // [{
        //   date: 'aa',
        //   title: '',
        //   description: '',
        //   priority: ''
        // }]
        data
      )
    );
    comp.delete('0')
    expect(comp.data).toEqual([{
      date: 'aa',
      title: '',
      description: '',
      priority: '',
      _id: ''
    }])

  });

  it('be able to navigate to another page', () => {
    comp.goToEdit("1");
  });


  });

