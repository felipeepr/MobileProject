import { ComponentFixture, TestBed } from '@angular/core/testing';
import { listCoinsPage } from './list-coins.page';

describe('listCoinsPage', () => {
  let component: listCoinsPage;
  let fixture: ComponentFixture<listCoinsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(listCoinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
