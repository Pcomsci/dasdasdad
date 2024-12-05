import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-blue-600">
            ระบบจัดเก็บข้อมูลโรงเรียนสตรีจอ่างทอง
          </h1>
        </div>

        {/* Form Section */}
        <form>
          {/* ข้อมูลเบื้องต้น */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* ชื่อ */}
            <div>
              <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
              <input
                type="text"
                placeholder="กรุณากรอกชื่อ"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {/* นามสกุล */}
            <div>
              <label className="block text-sm font-medium text-gray-700">นามสกุล</label>
              <input
                type="text"
                placeholder="กรุณากรอกนามสกุล"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {/* เบอร์โทรศัพท์ */}
            <div>
              <label className="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
              <input
                type="text"
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {/* อีเมล */}
            <div>
              <label className="block text-sm font-medium text-gray-700">อีเมล</label>
              <input
                type="email"
                placeholder="กรุณากรอกอีเมล"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* ชั้นเรียน */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* ชั้นปี */}
            <div>
              <label className="block text-sm font-medium text-gray-700">ชั้นปี</label>
              <select
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>กรุณาเลือกชั้นปี</option>
                <option>ม.1</option>
                <option>ม.2</option>
                <option>ม.3</option>
              </select>
            </div>
            {/* ห้อง */}
            <div>
              <label className="block text-sm font-medium text-gray-700">ห้อง</label>
              <select
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>กรุณาเลือกห้อง</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>

          {/* หมายเหตุ */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">หมายเหตุ</label>
            <textarea
              placeholder="กรุณากรอกหมายเหตุ"
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>

          {/* สถานะใช้งาน */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-900">สถานะใช้งาน</label>
          </div>

          {/* ปุ่มบันทึกและย้อนกลับ */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300"
            >
              ย้อนกลับ
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;



