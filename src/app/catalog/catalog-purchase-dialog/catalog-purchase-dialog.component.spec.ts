import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPurchaseDialogComponent } from './catalog-purchase-dialog.component';

describe('CatalogPurchaseDialogComponent', () => {
  let component: CatalogPurchaseDialogComponent;
  let fixture: ComponentFixture<CatalogPurchaseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogPurchaseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPurchaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
