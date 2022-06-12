import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcontentComponent } from './dbcontent.component';

describe('DbcontentComponent', () => {
  let component: DbcontentComponent;
  let fixture: ComponentFixture<DbcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
