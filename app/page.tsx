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
  classYear: string;  // เพิ่มฟิลด์ classYear
  room: string;  // เพิ่มฟิลด์ room
  note: string; // เพิ่มหมายเหตุในประเภท Student
};

const StudentListPage = () => {
  // 📌 State จัดการข้อมูลนักเรียน
  const [students, setStudents] = useState<Student[]>([
    { id: 1, firstName: "สมชาย", lastName: "ใจดี", phone: "0812345678", email: "somchai@example.com", status: true, classYear: "year1", room: "room1",note: "ผู้เรียนดี" },
    { id: 2, firstName: "สมศรี", lastName: "ใจกว้าง", phone: "0812345679", email: "somsri@example.com", status: false, classYear: "year2", room: "room2",note: "ผู้เรียนดีมาก" },
  ]);

  // 📌 ฟอร์มข้อมูลนักเรียน (ใช้ Student type ที่มีฟิลด์ใหม่)
  const [formData, setFormData] = useState<Student>({
    id: -1, // ใช้หมายเลขที่เป็นค่าตัวเลขที่ถูกต้อง
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    status: false,
    classYear: "",  // เพิ่มค่าเริ่มต้น
    room: "", // เพิ่มค่าเริ่มต้น
    note: "", // ค่าเริ่มต้นของหมายเหตุ
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showStudentList, setShowStudentList] = useState(true); // สลับระหว่างหน้า list และ form

  // 📌 ฟังก์ชันจัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, } = e.target;
  
    // ตรวจสอบว่าเป็น input ชนิด checkbox หรือไม่
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked, // cast ให้เป็น HTMLInputElement
      });
    } else {
      setFormData({
        ...formData,
        [name]: value, // สำหรับ input ประเภทอื่นๆ ใช้ value
      });
    }
  };
  
  

  // 📌 ฟังก์ชันเพิ่มหรือแก้ไขข้อมูลนักเรียน
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  
    if (isEditing) {
      // ถ้าเป็นการแก้ไขข้อมูลนักเรียน
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === formData.id ? { ...formData, note: formData.note || "" } : student
        )
      );
    } else {
      // ถ้าเป็นการเพิ่มข้อมูลนักเรียนใหม่
      const newStudent = { ...formData, id: Date.now(), note: formData.note || "" }; // เพิ่ม note
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    }

    
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
      <aside className="w-1/4 bg-blue-900 text-white p-6 flex flex-col items-center space-y-6">
        {/* โลโก้ */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxRrTlrGYXiOBTxS82oN2RTjgbfiLy9jLkQ&s" 
          alt="School Logo" 
          className="h-32 w-32 object-cover rounded-full" 
        />

        {/* หัวข้อ */}
        <h1 className="text-xl font-bold">ระบบจัดเก็บข้อมูล</h1>

        {/* เมนู */}
        <ul className="w-full space-y-4">
          <li>
            <button 
              onClick={() => setShowStudentList(true)} 
              className="text-lg font-semibold underline w-full text-center"
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
              className="text-white px-6 py-2 bg-yellow-500 rounded-md hover:bg-yellow-300 mb-4"
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
            <h1 className="text-2xl font-bold mb-6 underline text-blue-500">{isEditing ? "แก้ไขข้อมูลนักเรียน" : "เพิ่มนักเรียนใหม่"}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <h1 className="text-xl mb-2 text-gray-500">ข้อมูลเบื้องต้น</h1>
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

              <h1 className="text-xl mb-2 text-gray-500">ชั้นเรียน</h1>
              <select
                name="classYear"
                value={formData.classYear}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              >
                <option value="">เลือกชั้นเรียน</option>
                <option value="year1">ม.1</option>
                <option value="year2">ม.2</option>
                <option value="year3">ม.3</option>
                <option value="year4">ม.4</option>
                <option value="year5">ม.5</option>
                <option value="year6">ม.6</option>
              </select>

              <select
                name="room"
                value={formData.room}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              >
                <option value="">เลือกห้อง</option>
                <option value="room1">1</option>
                <option value="room2">2</option>
                <option value="room3">3</option>
                <option value="room4">4</option>
                <option value="room5">5</option>
                <option value="room6">6</option>
                <option value="room7">7</option>
                <option value="room8">8</option>
                <option value="room9">9</option>
                <option value="room10">10</option>
                <option value="room11">11</option>
                <option value="room12">12 no.1</option>
              </select>
              
              <input 
  type="text" 
  name="note" 
  value={formData.note} 
  onChange={handleInputChange} 
  placeholder="หมายเหตุ" 
  className="border p-2 rounded w-full text-left"
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
