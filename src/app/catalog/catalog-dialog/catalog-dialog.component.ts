import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from '../../../model/product';

@Component({
  selector: 'app-catalog-dialog',
  templateUrl: './catalog-dialog.component.html',
  styleUrls: ['./catalog-dialog.component.scss']
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
    return {'background-image': url};
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }
}
