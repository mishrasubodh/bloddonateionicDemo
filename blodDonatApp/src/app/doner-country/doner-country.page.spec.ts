import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonerCountryPage } from './doner-country.page';

describe('DonerCountryPage', () => {
  let component: DonerCountryPage;
  let fixture: ComponentFixture<DonerCountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonerCountryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonerCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
