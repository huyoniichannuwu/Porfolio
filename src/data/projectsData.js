// Dữ liệu mẫu cho phần Projects.
// Thay thumbnailLabel, description, techStack, githubUrl bằng dự án thật của bạn.
// accentColor dùng để tô màu thanh cửa sổ giả lập phía trên mỗi card.

export const projectsData = [
  {
    id: "qlthuycung",
    title: "Ứng dụng Quản lý Thủy Cung",
    description:
      "Hệ thống quản lý bể cá / thủy cung: bán vé, chăm sóc sinh vật, doanh thu. Toàn bộ nghiệp vụ xử lý ở tầng CSDL (stored procedure, view, trigger), giao diện Tkinter chỉ hiển thị dữ liệu.",
    techStack: ["Python", "Tkinter", "SQLServer", "pyodbc"],
    githubUrl: "https://github.com/huyoniichannuwu/Aquarium-Management",
    thumbnailLabel: "localhost/qlthuycung",
    accentColor: "#1f9e88",
  },
  {
    id: "traffic-sign",
    title: "Hệ Thống Nhận Diện Biển Báo, Người Đi Bộ và Cảnh Báo Thông Minh Trong Giao Thông",
    description:
      "Huấn luyện mô hình YOLOv8/YOLOv12 nhận diện 45 lớp biển báo giao thông trên bộ dữ liệu Roboflow, hướng tới đề tài nghiên cứu khoa học sinh viên.",
    techStack: ["Python", "YOLOv8", "Roboflow"],
    githubUrl: "https://github.com/huyoniichannuwu/Traffic_Detection_Project",
    thumbnailLabel: "notebook/traffic-sign.ipynb",
    accentColor: "#f2a93b",
  },
  // {
  //   id: "portfolio",
  //   title: "Portfolio cá nhân",
  //   description:
  //     "Trang giới thiệu bản thân xây dựng bằng ReactJS + Vite: quản lý state cho bộ lọc dự án, form liên hệ, và chế độ Sáng/Tối lưu trong localStorage.",
  //   techStack: ["React", "Vite", "CSS"],
  //   githubUrl: "https://github.com/",
  //   thumbnailLabel: "localhost:5173/",
  //   accentColor: "#4f8ef7",
  // },
];
