import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CORDS, Coordinates, userType, UserDetails } from "../types/types";

function Signup() {
  const [position, setPosition] = useState<Coordinates>();

  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    };

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position: CORDS) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      console.log(`More or less ${position.coords.accuracy} meters.`);
    }
    navigator.geolocation.getCurrentPosition(showPosition, error, options);
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: UserDetails) => {
    const userData: userType = {
      location: {
        latitude: position!.latitude,
        longitude: position!.longitude,
      },
      ...data,
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("http://localhost:5000/api/register/client", userData, config)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <div className="mt-10 sm:mt-5 sm:mb-5 sm:ml-16">
        <div className="md:grid md:grid-cols-2 md:gap-2">
          <div className="md:col-span-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow overflow-hidden sm:rounded-md ">
                <div className="px-2 py-2 bg-white sm:p-6 border-r-2 border-indigo-400">
                  <div className="grid grid-cols-6 gap-10">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-indigo-700"
                      >
                        Username
                      </label>

                      <input
                        type="text"
                        name="username"
                        ref={register}
                        className="mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-inner sm:text-sm border-gray-500 border-b-2  rounded-md"
                      ></input>

                      <input
                        type="text"
                        name="email"
                        ref={register}
                        className="mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-inner sm:text-sm border-gray-500 border-b-2  rounded-md"
                      ></input>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-indigo-700">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        ref={register}
                        className="mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-inner sm:text-sm border-gray-500 border-b-2 rounded-md"
                      ></input>
                      <p className="mt-2 text-sm text-indigo-700">
                        Use atleast 6-8 characters, include numbers and
                        uppercase.
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-indigo-700">
                        Age
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="age"
                          ref={register}
                          className="mt-1 h-10 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-inner sm:text-sm border-gray-500 border-b-2 rounded-md"
                        ></input>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-indigo-700"
                      >
                        Gender
                      </label>
                      <div className="mt-1">
                        <select
                          className="mt-1 h-10 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-inner sm:text-sm border-gray-500 border-b-2 rounded-md"
                          // value={gender}
                          ref={register}
                          name="gender"
                          // onChange={handleChangeGender}
                        >
                          <option value="none" selected hidden>
                            Gender
                          </option>
                          <option className="select" value="Male">
                            Male
                          </option>
                          <option className="select" value="Female">
                            Female
                          </option>
                          <option className="select" value="Other">
                            Other
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-indigo-700"
                      >
                        Residence/Area
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="residence"
                          id="area"
                          ref={register}
                          className="mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-inner sm:text-sm border-gray-500 border-b-2  rounded-md"
                        ></input>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <legend className="block text-sm font-medium text-indigo-700">
                        Role
                      </legend>
                      <div className="mt-1 space-y-4">
                        <select
                          className="mt-1 h-10 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-inner sm:text-sm border-gray-500 border-b-2 rounded-md"
                          // value={role}
                          ref={register}
                          name="role"
                          // onChange={handleChangeRole}
                        >
                          <option value="none" selected hidden>
                            Role
                          </option>
                          <option className="select" value="Utility Helper">
                            Utility Helper
                          </option>
                          <option className="select" value="User">
                            User
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-indigo-700"
                      >
                        About
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="about"
                          ref={register}
                          className="mt-1 h-15 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-inner sm:text-sm border-gray-500 border-b-2 rounded-md"
                          placeholder="Short Introduction"
                        ></textarea>
                      </div>
                      <p className="mt-2 text-sm text-indigo-700">
                        Let us know something about you.
                      </p>
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <i className="fas fa-arrow-right">
                        <input
                          type="submit"
                          className="mt-2 text-sm text-indigo-700"
                        />
                      </i>
                      <button className="float-right">
                        <input
                          type="submit"
                          className="border border-transparent text-base font-medium rounded-md text-indigo-50 bg-indigo-400 hover:bg-indigo-900 md:py-2 md:text-sm md:px-4 cursor-pointer"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
