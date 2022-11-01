import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewerComponent } from './list-viewer.component';

describe('ListViewerComponent', () => {
  let component: ListViewerComponent;
  let fixture: ComponentFixture<ListViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
