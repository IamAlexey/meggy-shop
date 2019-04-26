import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Item} from '../../../model/product';

@Component({
  selector: 'app-catalog-dialog',
  templateUrl: './catalog-dialog.component.html'
})
export class CatalogDialogComponent implements OnInit {

  description: string;
  price: any;
  thumb_photo: string;
  title: string;

  constructor(
    private dialogRef: MatDialogRef<CatalogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {
      description, price, thumb_photo, title
    }: Item) {

    this.description = description;
    console.log('!!!');
    console.log(description);
    this.price = price;
    this.thumb_photo = thumb_photo;
    this.title = title;

  }

  ngOnInit() {

  }

  close() {
    this.dialogRef.close();
  }

  getImage() {
    const url = `url(${this.thumb_photo})`;
    return {'background-image': url, width: '400px', height: '400px'};
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }
}
