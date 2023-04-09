
// ini untuk get data
const services = [
  {
    title: "COMPLETE VIP FASTTRACK SERVICE ",
    sub_title: "EXCLUDE VOA",
    price: 500000,
    has_transfer: true,
    detail: {
      overview: "string",
      information: ["MEET & GREAT WITH CUSTOMER'S NAME"],
      facilities: ["PROFESSIONAL LUXURY RECEPTION", "VIP LOUNGE"],
      booking_requirement: ["YOUR FLIGHT DETAILS"],
      cancelation_info: [
        "SERVICE AFTER BOOKED CAN NOT TO BE CANCELLATION (NON REFUNDABLE)",
      ],
      exclude: ["PASSPORT & VISA PROBLEM"],
      addon_information: [
        "WE NEED DOCUMENT TO CREATE FAST PROCESSING WHEN ARRIVAL & DEPARTURE ",
      ],
      note: "PASSPORT OF ALL PASSENGERS  AND FLIGHT DETAILS: YOUR DOCUMENT WILL KEEP GUARANTEED AND WILL DELETE AFTER SERVICE ",
    },
  },
];

const transferRate = [
  {
    name: "Batu bulan",
    price: 300000,
  },
  {
    name: "Batu bulan",
    price: 300000,
  },
];

const airlines = [
  { code: "AK", full_name: "AIR ASIA" },
  { code: "AK", full_name: "AIR ASIA" },
];

// ini untuk post data
const booking_submission = {
  airline: "AK",
  flight_number: "w2335345",
  first_name: "jhon",
  last_name: "dhon",
  country: "USA",
  email: "jhon@email.com",
  phone: "32324",
  special_request: "whatever",
  guest_info: [
    {
      type: "adult",
      name: "jhon",
    },
    {
      type: "adult",
      name: "jhon",
    },
  ],
  price: 500000,
  fee: 10000,
  total: 60000
};
