import { useEffect, useState } from "react";

interface Student {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  status: string;
}

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students") || "[]");
    setStudents(storedStudents);
  }, []);

  const handleDeleteStudent = (index: number) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">รายชื่อนักเรียน</h1>
      
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ</th>
            <th>นามสกุล</th>
            <th>เบอร์โทร</th>
            <th>อีเมล</th>
            <th>สถานะ</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {/* ใช้ .map() ตามที่อธิบายไว้ */}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
