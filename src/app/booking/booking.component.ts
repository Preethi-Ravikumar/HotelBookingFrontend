import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  booking: any = [];
  filterText = '';
  toaster: any;
  constructor(private apolloClient: Apollo, private dataService: DataService) {}
//   deleteBooking(id: string) {
//     this.toaster.success('Location Deleted');
// }
  ngOnInit(): void {
    this.apolloClient
      .watchQuery<any>({
        query: this.dataService.GET_BOOKING,
      })
      .valueChanges.subscribe((response) => {
        console.log('all booking');
        console.log(response.data.getBooking);
        this.booking = response.data.getBooking;
      });
  }
}
