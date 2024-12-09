"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

// กำหนดประเภทข้อมูลของนักเรียน
type Student = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  status: boolean;
};

const StudentListPage = () => {
  // 📌 State จัดการข้อมูลนักเรียน
  const [students, setStudents] = useState<Student[]>([
    { id: 1, firstName: "สมชาย", lastName: "ใจดี", phone: "0812345678", email: "somchai@example.com", status: true },
    { id: 2, firstName: "สมศรี", lastName: "ใจกว้าง", phone: "0812345679", email: "somsri@example.com", status: false },
  ]);

  const [formData, setFormData] = useState<Student>({
    id: -1, // ใช้หมายเลขที่เป็นค่าตัวเลขที่ถูกต้อง
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    status: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showStudentList, setShowStudentList] = useState(true); // สลับระหว่างหน้า list และ form

  // 📌 ฟังก์ชันจัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 📌 ฟังก์ชันเพิ่มหรือแก้ไขข้อมูลนักเรียน
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === formData.id ? formData : student
        )
      );
    } else {
      const newStudent = { ...formData, id: Date.now() };
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    }

    setFormData({ id: -1, firstName: "", lastName: "", phone: "", email: "", status: false });
    setIsEditing(false);
    setShowStudentList(true); // กลับไปหน้ารายชื่อนักเรียน
  };

  // 📌 ฟังก์ชันแก้ไขข้อมูลนักเรียน
  const handleEdit = (student: Student) => {
    setFormData(student);
    setIsEditing(true);
    setShowStudentList(false); // ไปที่หน้าฟอร์มกรอกข้อมูล
  };

  // 📌 ฟังก์ชันลบนักเรียน
  const handleDelete = (id: number) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex">
      {/* เมนู Sidebar */}
      <aside className="w-1/4 bg-blue-900 text-white p-6">
      <img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxRrTlrGYXiOBTxS82oN2RTjgbfiLy9jLkQ&s" 
  alt="School Logo" 
  className="h-32 w-32 object-cover" 
/>

        <h1 className="text-xl font-bold mb-6">ระบบจัดเก็บข้อมูล</h1>
        <ul>
          <li className="mb-4">
            <button 
              onClick={() => setShowStudentList(true)} 
              className="text-lg font-semibold underline"
            >
              จัดการรายชื่อนักเรียน
            </button>
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-10 bg-white shadow-md rounded-md">
        {showStudentList ? (
          <>
            {/* 📄 รายการนักเรียน */}
            <h1 className="text-2xl font-bold mb-6">รายชื่อนักเรียน</h1>
            <button 
              onClick={() => setShowStudentList(false)} 
              className="text-white px-6 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-300"
            >
            เพิ่มนักเรียน
            </button>

            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">ลำดับ</th>
                  <th className="border p-2">ชื่อ</th>
                  <th className="border p-2">นามสกุล</th>
                  <th className="border p-2">เบอร์โทรศัพท์</th>
                  <th className="border p-2">อีเมล</th>
                  <th className="border p-2">สถานะ</th>
                  <th className="border p-2">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id}>
                    <td className="border p-2 text-center">{index + 1}</td>
                    <td className="border p-2">{student.firstName}</td>
                    <td className="border p-2">{student.lastName}</td>
                    <td className="border p-2">{student.phone}</td>
                    <td className="border p-2">{student.email}</td>
                    <td className="border p-2 text-center">{student.status ? "✅" : "❌"}</td>
                    <td className="border p-2">
                      <button 
                        onClick={() => handleEdit(student)} 
                        className="bg-yellow-300 px-4 py-1 rounded"
                      >
                        แก้ไข
                      </button>
                      <button 
                        onClick={() => handleDelete(student.id)} 
                        className="bg-red-500 text-white px-4 py-1 rounded ml-2"
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            {/* 📋 แบบฟอร์มเพิ่ม/แก้ไขนักเรียน */}
            <h1 className="text-2xl font-bold mb-6">{isEditing ? "แก้ไขข้อมูลนักเรียน" : "เพิ่มนักเรียนใหม่"}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleInputChange} 
                placeholder="ชื่อ" 
                className="border p-2 rounded w-full" 
              />
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleInputChange} 
                placeholder="นามสกุล" 
                className="border p-2 rounded w-full" 
              />
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                placeholder="เบอร์โทรศัพท์" 
                className="border p-2 rounded w-full" 
              />
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                placeholder="อีเมล" 
                className="border p-2 rounded w-full" 
              />
              <div>
                <input 
                  type="checkbox" 
                  name="status" 
                  checked={formData.status} 
                  onChange={handleInputChange} 
                  className="mr-2" 
                />
                <label>สถานะใช้งาน</label>
              </div>

              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-200">
                {isEditing ? "บันทึกการแก้ไข" : "ยันยืน"}
              </button>
              <button 
                onClick={() => setShowStudentList(true)} 
                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
              >
                ย้อนกลับ
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
};

export default StudentListPage;
