import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public GET_USER = gql`
    {
      getUser {
        id
        username
        firstname
        lastname
        email
        password
        token
        type
      }
    }
  `;

  public GET_USER_BY_USERNAME = gql`
    query getUserByUsername($username: String!) {
      getUserByUsername(username: $username) {
        id
        username
        firstname
        lastname
        email
        password
        token
        type
      }
    }
  `;

  public GET_LISTING = gql`
    {
      getListing {
        id
        listing_id
        listing_title
        description
        street
        city
        postal_code
        single_price
        double_price
        single_count
        double_count
        email
        username
        type
        created
        token
      }
    }
  `;

  public GET_BOOKING = gql`
    {
      getBooking {
        listing_id
        booking_id
        booking_date
        single_room
        double_room
        booking_start
        booking_end
        username
      }
    }
  `;

  public GET_LISTING_CREATED_BY_ADMIN = gql`
    query getListingCreatedByAdmin($type: String!) {
      getListingCreatedByAdmin(type: $type) {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        single_price
        double_price
        single_count
        double_count
        email
        username
        type
        created
        token
      }
    }
  `;

  public GET_LISTIN_BY_NAME = gql`
    query getListingByName($listing_title: String!) {
      getListingByName(listing_title: $listing_title) {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        single_price
        double_price
        email
        username
        type
        created
        token
      }
    }
  `;

  public GET_LISTING_BY_CITY = gql`
    query getListingByCity($city: String!) {
      getListingByCity(city: $city) {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        single_price
        double_price
        email
        username
        type
        created
        token
      }
    }
  `;

  public GET_LISTING_BY_ID = gql`
    query getListingByID($id: ID!) {
      getListingByID(id: $id) {
        id
        listing_id
        listing_title
        description
        street
        city
        postal_code
        single_price
        double_price
        email
        username
        type
        created
        token
      }
    }
  `;

  public GET_BOOKING_BY_USERNAME = gql`
    query getBookingByUsername($username: String!) {
      getBookingByUsername(username: $username) {
        listing_id
        booking_id
        single_room
        double_room
        booking_date
        booking_start
        booking_end
        username
      }
    }
  `;

  public ADD_LISTING = gql`
    mutation addListing(
      $listing_id: String
      $listing_title: String
      $description: String
      $street: String
      $city: String
      $postal_code: String
      $single_price: String
      $double_price: String
      $single_count: String
      $double_count: String
      $email: String
      $username: String
      $type: String
    ) {
      addListing(
        listing_id: $listing_id
        listing_title: $listing_title
        description: $description
        street: $street
        city: $city
        postal_code: $postal_code
        single_price: $single_price 
        double_price: $double_price
        single_count: $single_count
        double_count: $double_count
        email: $email
        username: $username
        type: $type
      ) {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        single_price
        double_price
        single_count
        double_count
        email
        username
        type
        created
      }
    }
  `;

  public ADD_USER = gql`
    mutation addUser(
      $username: String!
      $firstname: String!
      $lastname: String!
      $email: String!
      $password: String!
      $type: String!
    ) {
      addUser(
        username: $username
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
        type: $type
      ) {
        id
        username
        firstname
        lastname
        email
        password
        token
        type
      }
    }
  `;

  public ADD_BOOKING = gql`
    mutation addBooking(
      $listing_id: String!
      $booking_id: String!
      $booking_date: String!
      $single_room: String!
      $double_room: String!
      $booking_start: String!
      $booking_end: String!
      $username: String!
    ) {
      addBooking(
        listing_id: $listing_id
        booking_id: $booking_id
        booking_date: $booking_date
        single_room: $single_room
        double_room: $double_room
        booking_start: $booking_start
        booking_end: $booking_end
        username: $username
      ) {
        listing_id
        booking_id
        booking_date
        single_room
        double_room
        booking_start
        booking_end
        username
      }
    }
  `;
}
