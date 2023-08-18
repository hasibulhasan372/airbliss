import React from "react";

const FlightSummery = ({ flightFullDetails }) => {
  const { base_fare, taxes_fee, ticket_price } = flightFullDetails || {};

  return (
    <section className="mt-3 border-[1px] rounded-sm">
      <h1 className=" p-3 border-b-[1px]">
        <b>Fare breakdown</b>
      </h1>

      {/* Table Body */}
      <section className="p-3">
        <table className="border-collapse border w-full text-[10px] text-gray-500">
          <thead>
            <tr className="">
              <th className="border p-2" align="start">
                Fare Summary
              </th>
              <th className="border p-2" align="start">
                Base Fare
              </th>
              <th className="border p-2" align="start">
                Taxes + Fees
              </th>
              <th className="border p-2" align="start">
                Per Passenger
              </th>
              <th className="border p-2" align="start">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Adult</td>
              <td className="border p-2">BDT {base_fare}</td>
              <td className="border p-2">BDT {taxes_fee}</td>
              <td className="border p-2">BDT {taxes_fee}</td>
              <td className="border p-2">BDT {ticket_price}</td>
            </tr>
            <tr>
              <td className="border p-2">Total (1 Traveler)</td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
              <td className="border p-2">BDT {ticket_price}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default FlightSummery;