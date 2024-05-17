import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: any[] = [
    {
      productID: 1,
      productName: 'Coconut Cake',
      image:
        'https://i.etsystatic.com/34679907/r/il/f8f928/3876868327/il_794xN.3876868327_d5hx.jpg',
      productDescription: 'This coconut cake is BULALALALALL',
      productReview: 'The best coconut cake in town. I love it',
    },
    {
      productID: 2,
      productName: 'Chocolate Donut',
      image:
        'https://thebusybaker.ca/wp-content/uploads/2019/12/pumpkin-chocolate-chip-muffins-fb-ig-2.jpg',
      productDescription: 'This chocolate donut is mumumumumu',
      productReview:
        'The best chocolate donut in Chinatown. My grandpa love it',
    },
    {
      productID: 3,
      productName: 'Banana Muffin',
      image:
        'https://newagebakingcompany.com/wp-content/uploads/2016/03/Dollarphotoclub_56669687-copy1-1.jpg',
      productDescription: 'This banana muffin jojojojojojojo',
      productReview: 'The best banana muffin in Chinatown. My sister love it',
    },
    {
      productID: 4,
      productName: 'Orange cake',
      image:
        'https://www.aberdeenskitchen.com/wp-content/uploads/2020/07/Orange-Cake-with-Zesty-Cream-Cheese-Frosting-5.jpg',
      productDescription: 'This orange cake is lalalalalallala',
      productReview: 'The best Orange cake in Chinatown. My BF love it',
    },
    {
      productID: 5,
      productName: 'Cheese Muffin',
      image:
        'https://www.savoryexperiments.com/wp-content/uploads/2016/07/Strawberry-Cream-Cheese-Muffins-2-2048x1367.jpg',
      productDescription: 'This cheese muffin is zozozozozozo',
      productReview: 'The best cheese muffin in Chinatown. I love it',
    },
  ];
}
