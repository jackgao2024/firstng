import { Component } from '@angular/core';
import { Tweet } from '../interfaces/tweet';

@Component({
  selector: 'app-tweets',
  standalone: true,
  imports: [],
  templateUrl: './tweets.component.html',
  styleUrl: './tweets.component.scss',
})
export class TweetsComponent {
  tweets: Tweet[] = [
    {
      tweetID: 1,
      tweet: 'The Great Escape',
      user: 'Jack',
      profileImage:
        'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_x96.jpg',
    },
    {
      tweetID: 2,
      tweet: 'I am David',
      user: 'David',
      profileImage:
        'https://pbs.twimg.com/profile_images/1163798004182257665/0004i_Tw_x96.jpg',
    },
    {
      tweetID: 3,
      tweet: 'The pianist ',
      user: 'Jojo',
      profileImage:
        'https://pbs.twimg.com/profile_images/1770513143741009920/MpPRkEzE_x96.png',
    },
  ];
  addNewTweet() {
    alert('New Tweet added');
  }

  display() {
    alert('double clicked');
  }
  mouseover() {
    alert('mouse overed');
  }
}
