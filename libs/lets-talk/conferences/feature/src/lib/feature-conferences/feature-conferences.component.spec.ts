import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureConferencesComponent } from './feature-conferences.component';

describe('FeatureConferencesComponent', () => {
  let component: FeatureConferencesComponent;
  let fixture: ComponentFixture<FeatureConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureConferencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
