import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import moment from "moment";

type CurrencyData = {
  //   [key: string]: {
  //     code: string;
  //     rate: number;
  //     name: string;
  //     inverseRate: number;
  //     date: string;
  //   };
  code: string;
  rate: number;
  name: string;
  inverseRate: number;
  date: string;
};

const initialData: CurrencyData[] = [
  {
    code: "",
    rate: 0,
    name: "",
    inverseRate: 0,
    date: "",
  },
];

const dataTest = {
  aed: {
    code: "AED",
    alphaCode: "AED",
    numericCode: "784",
    name: "U.A.E Dirham",
    rate: 3.672624445402,
    date: "Wed, 16 Jul 2025 06:55:02 GMT",
    inverseRate: 0.27228485102852,
  },
  afn: {
    code: "AFN",
    alphaCode: "AFN",
    numericCode: "971",
    name: "Afghan afghani",
    rate: 69.138791255894,
    date: "Wed, 16 Jul 2025 06:55:02 GMT",
    inverseRate: 0.014463660440618,
  },
};

const TestSithigo = () => {
  const [data, setData] = useState<CurrencyData[]>(initialData);

  async function getData() {
    const url = "https://www.floatrates.com/daily/usd.json";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
      console.log(json);

      if (json !== undefined) {
        let newDate = [];
        for (const [key] of Object.entries(json)) {
          if (json[key].inverseRate > 1.0) {
            const res = {
              code: json[key].code,
              rate: json[key].rate,
              name: json[key].name,
              inverseRate: json[key].inverseRate,
              date: json[key].date,
            };
            newDate.push(res);
          }
        }
        setData(newDate);
      }
    } catch (error) {
      // console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex items-center justify-between px-4 lg:px-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Inverse Rate</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(data).map(([key, value]) => {
            const buddhistYear = moment(value.date).year() + 543;
            return (
              <TableRow key={key}>
                <TableCell>{value.code}</TableCell>
                <TableCell>{value.rate.toFixed(4)}</TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.inverseRate.toFixed(4)}</TableCell>
                <TableCell>
                  {moment(value.date).format("DD/MM/") + buddhistYear}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TestSithigo;
