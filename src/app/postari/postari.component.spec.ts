import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostariComponent } from './postari.component';

describe('PostariComponent', () => {
  let component: PostariComponent;
  let fixture: ComponentFixture<PostariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
