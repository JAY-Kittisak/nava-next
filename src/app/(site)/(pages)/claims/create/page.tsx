"use client";
import { AppSidebar } from "@/components/app-sidebar";
import SiteHeader from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { useFormik } from "formik";
import { claimsFormSchema, type claimsFormValues } from "@/types/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";

export default function ContactForm() {
  const formik = useFormik<claimsFormValues>({
    initialValues: {
      // กำหนดค่าเริ่มต้นของแต่ละฟิลด์ในฟอร์ม
      name: "",
      email: "",
      message: "",
    },
    validationSchema: claimsFormSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // ฟังก์ชันที่จะทำงานเมื่อฟอร์มถูกส่ง (และผ่านการ Validation)
      console.log("Form submitted with values:", values);
      // จำลองการเรียก API (ในโปรเจกต์จริงจะส่งข้อมูลไปเซิร์ฟเวอร์ตรงนี้)

      toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 1500)); // หน่วงเวลา 1.5 วินาที

      resetForm(); // ล้างข้อมูลในฟอร์มหลังจากส่งสำเร็จ
      setSubmitting(false); // ตั้งค่าสถานะการส่งกลับเป็น false เพื่อให้กดปุ่มได้อีกครั้ง
    },
  });

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader
          items={[
            { breadcrumbHref: "/claims", breadcrumbLabel: "Claims" },
            { breadcrumbHref: "", breadcrumbLabel: "Create" },
          ]}
        />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 container mx-auto max-w-3xl px-4">
                <Card className="w-full max-w-xxl p-4">
                  <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                    Create a Claims
                  </h1>
                  <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                      <div className="relative w-full md:w-1/2">
                        <Label className="mb-2" htmlFor="name">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          className={
                            formik.touched.name && formik.errors.name
                              ? "border-red-500"
                              : ""
                          }
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <p className="absolute bottom-[-20px] text-red-500 text-sm mt-1">
                            {formik.errors.name}
                          </p>
                        ) : null}
                      </div>
                      <div className="relative w-full md:w-1/2">
                        <Label className="mb-2" htmlFor="email">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className={
                            formik.touched.email && formik.errors.email
                              ? "border-red-500"
                              : ""
                          }
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <p className="absolute bottom-[-20px] text-red-500 text-sm mt-1">
                            {formik.errors.email}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="relative">
                      <Label className="mb-2" htmlFor="name">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className={
                          formik.touched.message && formik.errors.message
                            ? "border-red-500"
                            : ""
                        }
                      />
                      {formik.touched.message && formik.errors.message ? (
                        <p className="absolute bottom-[-20px] text-red-500 text-sm mt-1">
                          {formik.errors.message}
                        </p>
                      ) : null}
                    </div>
                    <Button type="submit">Submit</Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
