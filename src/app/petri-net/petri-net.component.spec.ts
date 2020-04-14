import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetriNetComponent } from './petri-net.component';

describe('PetriNetComponent', () => {
  let component: PetriNetComponent;
  let fixture: ComponentFixture<PetriNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetriNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetriNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
