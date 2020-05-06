import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDonerInfoPage } from './edit-doner-info.page';

describe('EditDonerInfoPage', () => {
  let component: EditDonerInfoPage;
  let fixture: ComponentFixture<EditDonerInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDonerInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDonerInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
