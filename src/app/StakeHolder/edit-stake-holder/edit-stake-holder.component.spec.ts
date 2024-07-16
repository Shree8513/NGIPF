import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStakeHolderComponent } from './edit-stake-holder.component';

describe('EditStakeHolderComponent', () => {
  let component: EditStakeHolderComponent;
  let fixture: ComponentFixture<EditStakeHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStakeHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStakeHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
