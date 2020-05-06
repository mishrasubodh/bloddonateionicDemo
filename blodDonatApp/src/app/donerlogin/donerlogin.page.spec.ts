import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonerloginPage } from './donerlogin.page';

describe('DonerloginPage', () => {
  let component: DonerloginPage;
  let fixture: ComponentFixture<DonerloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonerloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonerloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
