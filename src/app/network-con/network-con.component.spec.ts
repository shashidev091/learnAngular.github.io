import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkConComponent } from './network-con.component';

describe('NetworkConComponent', () => {
  let component: NetworkConComponent;
  let fixture: ComponentFixture<NetworkConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
