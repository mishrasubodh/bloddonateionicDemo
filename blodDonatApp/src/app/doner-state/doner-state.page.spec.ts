import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonerStatePage } from './doner-state.page';

describe('DonerStatePage', () => {
  let component: DonerStatePage;
  let fixture: ComponentFixture<DonerStatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonerStatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonerStatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
