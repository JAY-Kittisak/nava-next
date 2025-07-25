import * as Yup from "yup";

// 1. Interface สำหรับค่าทั้งหมดในฟอร์มของเรา
export interface claimsFormValues {
  name: string;
  email: string;
  message: string;
}

// 2. Validation Schema สำหรับฟอร์มนี้ โดยใช้ Yup
export const claimsFormSchema = Yup.object({
  name: Yup.string()
    .max(50, "ชื่อต้องไม่เกิน 50 ตัวอักษร")
    .required("กรุณากรอกชื่อ"), // ต้องกรอก
  email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง") // ต้องเป็นรูปแบบอีเมลที่ถูกต้อง
    .required("กรุณากรอกอีเมล"), // ต้องกรอก
  message: Yup.string()
    .min(10, "ข้อความต้องมีอย่างน้อย 10 ตัวอักษร") // อย่างน้อย 10 ตัวอักษร
    .required("กรุณากรอกข้อความ"), // ต้องกรอก
});

interface BreadcrumbItem {
  breadcrumbHref: string;
  breadcrumbLabel: string;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}
