import { ContactDetails } from "./ContactDetails";

interface Booking extends ContactDetails {
  firstName: string;
  lastName: string;
  dogsName: string;
  dogsBreed: string;
  dogsAge: string;
  message: string;
}

export default Booking;
