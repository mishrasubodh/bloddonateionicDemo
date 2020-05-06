import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonerInfoPage } from './doner-info.page';

describe('DonerInfoPage', () => {
  let component: DonerInfoPage;
  let fixture: ComponentFixture<DonerInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonerInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonerInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
