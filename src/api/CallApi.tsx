import axios from "axios";
import React, { useEffect, useState } from "react";
import books from "../data/books";

type Props = {};

export default function CallApi({}: Props) {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      setList(books);
    } catch (err: any) {
      console.log(err.massage);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     await axios
  //       .get("http://localhost:5002/api/Home/List")
  //       .then((res) => {
  //         setList(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((err: any) => {
  //         throw err.response.data;
  //       });
  //   } catch (err: any) {
  //     console.log(err.massage);
  //   }
  // };

  return (
    <>
      <div className=" container mx-auto my-12 p-2 bg-slate-500 max-w-md rounded-md">
        {list.map((item: any) => (
          <div className="flex items-center justify-center dark:text-slate-100 m-1 max-w-full">
            <h2 className=" mr-2">
              id = {item.id}, isbn = {item.isbn}
            </h2>
            <h1>
              name = {item.name}, price = {item.price}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
