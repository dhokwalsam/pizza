import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as chai from 'chai';
import { AddCartItemComponent } from './add-cart-item.component';
import {BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import {ShoppingCartService} from '../../services/shopping-cart/shopping-cart.service';
const expect = chai.expect;


describe('AddCartItemComponent', () => {
  let component: AddCartItemComponent;
  let fixture: ComponentFixture<AddCartItemComponent>;
  let pizzaElement: DebugElement;
  let quantityElement: DebugElement;
  let priceElement: DebugElement;
  let addButtonElement: DebugElement;
  let shoppingCartService: ShoppingCartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCartItemComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule
      ],
      providers: [ ShoppingCartService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartItemComponent);
    shoppingCartService = TestBed.get(ShoppingCartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pizzaElement  = fixture.debugElement.query(By.css('.pizza'));
    quantityElement = fixture.debugElement.query(By.css('.quantity'));
    priceElement = fixture.debugElement.query(By.css('.price'));
    addButtonElement = fixture.debugElement.query(By.css('.add-button'));
  });

  it('should create - add cart item', () => {
    expect(component).to.not.be.null;
  });

  it('should have all components', () => {
    expect(component).to.not.be.null;
    expect(pizzaElement).to.not.be.null;
    expect(priceElement).to.not.be.null;
    expect(quantityElement).to.not.be.null;
    expect(addButtonElement).to.not.be.null;
  });

});
