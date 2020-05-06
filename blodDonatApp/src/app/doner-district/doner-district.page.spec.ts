import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonerDistrictPage } from './doner-district.page';

describe('DonerDistrictPage', () => {
  let component: DonerDistrictPage;
  let fixture: ComponentFixture<DonerDistrictPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonerDistrictPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonerDistrictPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
