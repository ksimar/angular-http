import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterOutletMap, Router, RouterModule, ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CreateTaskComponent} from "./createTask.component";
import {HttpModule} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of'


describe('CreateTaskComponent', function () {
  let de: DebugElement;
  let comp: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  let service: AppService;

  class MockActivatedRouter {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaskComponent ],
      providers: [{provide: ActivatedRoute, useClass: MockActivatedRouter},RouterOutletMap, AppService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

 /* it('be able to get data from service', () => {
    spyOn(service, 'getData').and.returnValue(
      Observable.of<any>(
        [{
          date: 'aa',
          title: '',
          description: '',
          priority: ''
        }]
      )
    );
    comp.ngOnInit();
    expect(comp.data).toEqual([{
      date: 'aa',
      title: '',
      description : '',
      priority : ''
    }])
  });
*/
});
