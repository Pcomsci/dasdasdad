"use client";

import React from "react";

const StudentFormPage = () => {
  return (
    <div className="minh-screen bg-gray-50 flex">
      <aside className="w-1/4 bg-blue-800 text-white p-6 relative">
        <div className="mb-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxRrTlrGYXiOBTxS82oN2RTjgbfiLy9jLkQ&s"
            alt="School Logo"
            className="h-16 mb-4"
          />
          <h1 className="text-xl font-bold">ระบบจัดเก็บข้อมูล</h1>
          <p className="text-sm">โรงเรียนสตรีอ่างทองทอง</p>
        </div>
        <nav>
          <ul>
            <li className="mb-4 font-bold flex items-center">
              <img
                src="https://i.ibb.co/Y3WqFqP/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8-removebg-preview.png"
                alt="Icon"
                className="h-6 w-6 mr-2"
              />
              จัดการรายชื่อนักเรียน
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10 relative">
<div className="absolute top-0 right-4 flex flex-col items-center">
  <img
    src="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg"
    alt="Profile"
    className="h-8 w-8 rounded-full border-2 border-yellow-200"
  />
</div>
        
        <div className="space-y-8">
          <h2 className="text-lg font-semibold text-gray-700">
            สร้างรายชื่อนักเรียน
          </h2>
          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-md font-semibold text-gray-800 mb-4">
              ข้อมูลส่วนตัว
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ชื่อ
                </label>
                <input
                  type="text"
                  className="w-full max-w-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 px-3 py-2"
                  placeholder="กรุณากรอกชื่อ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  นามสกุล
                </label>
                <input
                  type="text"
                  className="w-full max-w-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 px-3 py-2"
                  placeholder="กรุณากรอกนามสกุล"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="text"
                  className="w-full max-w-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 px-3 py-2"
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  อีเมล
                </label>
                <input
                  type="email"
                  className="w-full max-w-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 px-3 py-2"
                  placeholder="กรุณากรอกอีเมล"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                ที่อยู่
              </label>
              <input
                type="text"
                className="w-full max-w-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 px-3 py-2"
                placeholder="กรุณากรอกที่อยู่"
              />
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-md font-semibold text-gray-800 mb-4">
              ข้อมูลการเรียน
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ชั้นปี
                </label>
                <select className="w-full max-w-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 px-3 py-2">
                  <option>กรุณาเลือกชั้นปี</option>
                  <option>ปีที่ 1</option>
                  <option>ปีที่ 2</option>
                  <option>ปีที่ 3</option>
                  <option>ปีที่ 4</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ห้องที่
                </label>
                <select className="w-full max-w-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 px-3 py-2">
                  <option>กรุณาเลือกห้อง</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                หมายเหตุ
              </label>
              <textarea
                className="w-full max-w-xl border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 px-3 py-2"
                rows={4}
                placeholder="กรุณากรอกหมายเหตุ"
              ></textarea>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4 flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              id="toggle"
            />
            <label htmlFor="toggle" className="ml-2 text-sm text-gray-700">
              สถานะใช้งาน
            </label>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300"
            >
              ย้อนกลับ
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-300"
            >
              บันทึก
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentFormPage;


