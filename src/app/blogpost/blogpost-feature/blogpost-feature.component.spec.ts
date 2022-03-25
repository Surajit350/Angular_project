import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostFeatureComponent } from './blogpost-feature.component';

describe('BlogpostFeatureComponent', () => {
  let component: BlogpostFeatureComponent;
  let fixture: ComponentFixture<BlogpostFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpostFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
