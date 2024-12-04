import React from "react";

const StudentForm = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-md flex flex-col p-6">
        {/* Logo Section */}
        <div className="mb-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxRrTlrGYXiOBTxS82oN2RTjgbfiLy9jLkQ&s"
            alt="Logo"
            className="w-20 h-auto mx-auto mb-4"
          />
          <h1 className="text-center text-lg font-bold text-blue-600">
            ระบบจัดเก็บข้อมูล
            <br />
            โรงเรียนสตร้องทอง
          </h1>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-blue-600 font-medium space-x-3 hover:text-blue-800"
              >
                <span className="text-xl">👤</span>
                <span>จัดการรายชื่อนักเรียน</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            จัดการรายชื่อนักเรียน <span className="text-gray-400">&gt;</span>{" "}
            สร้างรายชื่อนักเรียน
          </h2>
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-blue-600 shadow"
          />
        </header>

        {/* Form Section */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-700 mb-6">ข้อมูลเบื้องต้น</h3>
          <form className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
                <input
                  type="text"
                  placeholder="กรุณากรอกชื่อ"
                  className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">นามสกุล</label>
                <input
                  type="text"
                  placeholder="กรุณากรอกนามสกุล"
                  className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
                <input
                  type="text"
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                  className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">อีเมล</label>
                <input
                  type="email"
                  placeholder="กรุณากรอกอีเมล"
                  className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">ที่อยู่</label>
              <input
                type="text"
                placeholder="กรุณากรอกที่อยู่"
                className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Class Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">ชั้นปี</label>
                <select
                  className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>กรุณาเลือกชั้นปี</option>
                  <option>ปีที่ 1</option>
                  <option>ปีที่ 2</option>
                  <option>ปีที่ 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ห้อง</label>
                <select
                  className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>กรุณาเลือกห้อง</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm font-medium text-gray-700">หมายเหตุ</label>
              <textarea
                placeholder="กรุณากรอกหมายเหตุ"
                rows={3}
                className="w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Status */}
            <div className="flex items-center">
              <label htmlFor="status" className="text-sm font-medium text-gray-700 mr-4">
                สถานะใช้งาน
              </label>
              <input
                type="checkbox"
                id="status"
                className="w-6 h-6 text-blue-600 rounded focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="reset"
                className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
              >
                ย้อนกลับ
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
              >
                บันทึก
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default StudentForm;



