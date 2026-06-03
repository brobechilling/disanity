import { Workshop, CartItem, FAQ } from "@/types";

export const mockWorkshops: Workshop[] = [
  {
    title: "Sơn Mài Truyền Thống Hạ Thái",
    artist: "Trần Sông Lam",
    location: "Hà Nội",
    price: "200.000đ",
    originalPrice: "1.000.000đ",
    img: "/Rectangle429.png",
    left: 100,
    top: 585,
    fontClass: "font-jaro",
  },
  {
    title: "In tranh dân gian Làng Sình trên giấy dó",
    artist: "Nguyễn Hoàng Việt",
    location: "Huế",
    price: "50.000đ",
    originalPrice: "100.000đ",
    img: "/Rectangle429(3).png",
    left: 530,
    top: 585,
    fontClass: "font-jaro",
  },
  {
    title: "Làm tranh khắc gỗ truyền thống",
    artist: "Võ Thành Thiên",
    location: "Huế",
    price: "200.000đ",
    originalPrice: "500.000đ",
    img: "/Rectangle429(6).png",
    left: 961,
    top: 584,
    fontClass: "font-playfairDisplay",
  },
  {
    title: "Thực Hành In Mộc Bản Tranh Đông Hồ",
    artist: "Ngô Văn Ân",
    location: "Bắc Ninh",
    price: "70.000đ",
    originalPrice: "100.000đ",
    img: "/Rectangle429(2).png",
    left: 100,
    top: 1173,
    fontClass: "font-playfairDisplay",
  },
  {
    title: "Nhập môn sáng tác tranh lụa",
    artist: "Trần Sông Lam",
    location: "Hà Nội",
    price: "500.000đ",
    originalPrice: "700.000đ",
    img: "/Rectangle429(5).png",
    left: 530,
    top: 1173,
  },
  {
    title: "Tranh Hàng Trống – Vẽ & Phủ Màu Thủ Công",
    artist: "Võ Thành Thiên",
    location: "Hà Nội",
    price: "600.000đ",
    originalPrice: "900.000đ",
    img: "/Rectangle429(8).png",
    left: 961,
    top: 1172,
  },
  {
    title: "Phục dựng và tô màu tranh Kính Huế",
    artist: "Trần Sông Lam",
    location: "Hà Nội",
    price: "200.000đ",
    originalPrice: "1.000.000đ",
    img: "/Rectangle429(1).png",
    left: 100,
    top: 1726,
  },
  {
    title: "Trải nghiệm quy trình tạo nên tranh Kim Hoàng",
    artist: "Nguyễn Hoàng Việt",
    location: "Hà Nội",
    price: "80.000đ",
    originalPrice: "100.000đ",
    img: "/Rectangle429(4).png",
    left: 530,
    top: 1726,
  },
  {
    title: "Nhập môn sáng tác tranh sơn dầu",
    artist: "Nguyễn Đăng Lướng",
    location: "Huế",
    price: "800.000đ",
    originalPrice: "1.000.000đ",
    img: "/Rectangle429(7).png",
    left: 961,
    top: 1725,
  },
];

export const mockCartItems = [
  {
    id: 1,
    title: "Nhập môn sáng tác...",
    price: 200000,
    unitPriceText: "150,000₫",
    img: "/cart/Rectangle9.png",
    qty: 1,
    genre: "Mỹ thuật truyền thống - đương đại",
    type: "Sơn mài",
    location: "Làng Hạ Thái - Hà Nội",
    artisan: "Trần Sông Lam",
    duration: "6 tiếng",
  },
  {
    id: 2,
    title: "Nhập môn sáng tác...",
    price: 200000,
    unitPriceText: "150,000₫",
    img: "/cart/Rectangle9(1).png",
    qty: 1,
    genre: "Mỹ thuật truyền thống - đương đại",
    type: "Sơn mài",
    location: "Làng Hạ Thái - Hà Nội",
    artisan: "Trần Sông Lam",
    duration: "6 tiếng",
  },
];

export const mockHeroSlides = [
  {
    title: "Nhập môn sáng tác sơn mài hạ thái",
    subtitle: "changing our main processes and products",
    img: "/cart/Rectangle71.png",
  },
  {
    title: "Nghệ thuật khảm trai độc bản",
    subtitle: "discovering traditional seashell inlay craft",
    img: "/cart/Rectangle71.png",
  },
];

export const mockFAQs: FAQ[] = [
  {
    q: "Điền thông tin địa chỉ sau sáp nhập hay địa chỉ cũ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut. Bạn nên điền địa chỉ thường trú hiện tại và mới nhất để phục vụ công tác chuyển phát hóa đơn hoặc vé mời giấy nếu có.",
  },
  {
    q: "Tôi có thể hủy workshop và nhận hoàn tiền không?",
    a: "Chính sách hủy vé của DiSanity cho phép bạn hủy trước thời gian diễn ra workshop 48 tiếng và nhận hoàn 100% chi phí. Các yêu cầu hủy sau thời hạn này sẽ không được hoàn tiền nhưng có thể hỗ trợ dời lịch sang buổi tiếp theo.",
  },
  {
    q: "Tôi có thể thay đổi thông tin thanh toán sau khi đặt chỗ không?",
    a: "Sau khi giao dịch đã hoàn tất thành công, bạn không thể thay đổi phương thức thanh toán. Tuy nhiên, nếu phát hiện sai sót thông tin hóa đơn, vui lòng liên hệ ngay với CSKH của DiSanity để được trợ giúp sửa đổi.",
  },
  {
    q: "Có ưu đãi cho nhóm hoặc đặt nhiều vé không?",
    a: "Có! DiSanity luôn có chính sách chiết khấu cực kỳ hấp dẫn dành cho các nhóm từ 5 người trở lên, hoặc khách hàng đặt combo nhiều lớp học cùng lúc. Chi tiết ưu đãi sẽ được áp dụng tự động ở bước thanh toán.",
  },
  {
    q: "Tôi có thể xuất hóa đơn cho công ty không?",
    a: "Hoàn toàn có thể. Khi điền thông tin khách hàng ở bước tiếp theo, bạn chỉ cần chọn mục 'Yêu cầu xuất hóa đơn đỏ (VAT)' và điền đầy đủ Tên công ty, Mã số thuế cũng như Địa chỉ công ty để DiSanity xuất hóa đơn điện tử.",
  },
  {
    q: "Thanh toán thất bại nhưng tiền đã trừ thì phải làm sao?",
    a: "Đừng lo lắng! Trong trường hợp tài khoản đã bị trừ tiền nhưng hệ thống chưa ghi nhận trạng thái thanh toán, vui lòng chụp lại biên lai giao dịch ngân hàng và liên hệ trực tiếp số Hotline trên website để được kích hoạt vé tức thì.",
  },
];

// Additional mock data sets added to align disanity-frontend precisely to the decoupled boilerplate architecture:

export interface UploadedImage {
  id: number;
  name: string;
  url: string;
  alt: string;
}

export const mockUploadedImages: UploadedImage[] = [
  { id: 1, name: "QuyTrnhLmGm.png", url: "/createworkshop/QuyTrnhLmGm.png", alt: "Quy trình làm gốm" },
  { id: 2, name: "KhngGianWorkshop.png", url: "/createworkshop/KhngGianWorkshop.png", alt: "Không gian workshop" }
];

export interface ArtisanFAQ {
  question: string;
  answer: string;
}

export const mockArtisanFAQs: ArtisanFAQ[] = [
  {
    question: "Điền thông tin địa chỉ sau sáp nhập hay địa chỉ cũ?",
    answer: "Vui lòng cung cấp địa chỉ chính xác nhất theo bản đồ số hiện tại nơi diễn ra hoạt động workshop để lữ khách của bạn có thể dễ dàng tìm kiếm và di chuyển đến đúng địa điểm nhất."
  },
  {
    question: "Tôi có thể thay đổi thông tin thanh toán sau khi đặt chỗ không?",
    answer: "Hoàn toàn được. Bạn có thể cập nhật thông tin tài khoản ngân hàng nhận doanh thu của mình bất cứ lúc nào trong bảng quản lý Tài khoản Nghệ nhân mà không ảnh hưởng tới các lịch đã đặt trước đó."
  },
  {
    question: "Có ưu đãi cho nhóm hoặc đặt nhiều vé không?",
    answer: "Hệ thống hỗ trợ chính sách chiết khấu tự động từ 5% đến 15% đối với các đơn hàng đăng ký trải nghiệm theo nhóm đông người (từ 5 người trở lên) nhằm khuyến khích gia đình và doanh nghiệp tham gia."
  },
  {
    question: "Tôi có thể xuất hóa đơn cho công ty không?",
    answer: "Có. DiSanity cung cấp tính năng xuất hóa đơn điện tử VAT trực tiếp cho cơ quan, tổ chức khi lữ khách đăng ký gói trải nghiệm văn hóa truyền thống phục vụ hoạt động teambuilding doanh nghiệp."
  },
  {
    question: "Tôi có thể hủy workshop và nhận hoàn tiền không?",
    answer: "Quy chế hủy đặt vé linh hoạt hỗ trợ lữ khách trước 48 tiếng để đảm bảo công tác chuẩn bị nguyên vật liệu và sắp xếp lịch của nghệ nhân được chủ động và tôn trọng nhất."
  },
  {
    question: "Thanh toán thất bại nhưng tiền đã trừ thì phải làm sao?",
    answer: "Nếu gặp sự cố giao dịch, hệ thống sẽ đối soát tự động trong 15 phút. Bạn hoặc lữ khách có thể chụp hóa đơn và liên hệ trực tiếp hotline kỹ thuật 03324233282 của DiSanity để được đối soát ngân hàng và xử lý kích hoạt vé."
  }
];

export interface BookedWorkshop {
  title: string;
  price: string;
  img: string;
  genre: string;
  type: string;
  location: string;
  artisan: string;
  duration: string;
  date: string;
}

export const mockBookedWorkshops: BookedWorkshop[] = [
  {
    title: "Nhập môn sáng tác...",
    price: "200.000đ",
    img: "/taikhoankhachhang/Rectangle9.png",
    genre: "Mỹ thuật truyền thống - đương đại",
    type: "Sơn mài",
    location: "Làng Hạ Thái - Hà Nội",
    artisan: "Trần Sông Lam",
    duration: "6 tiếng",
    date: "28/3/2026",
  },
  {
    title: "Nhập môn sáng tác...",
    price: "200.000đ",
    img: "/taikhoankhachhang/Rectangle9(1).png",
    genre: "Mỹ thuật truyền thống - đương đại",
    type: "Sơn mài",
    location: "Làng Hạ Thái - Hà Nội",
    artisan: "Trần Sông Lam",
    duration: "6 tiếng",
    date: "28/3/2026",
  },
];

export interface WrittenReview {
  title: string;
  date: string;
  rating: string;
  comment: string;
}

export const mockWrittenReviews: WrittenReview[] = [
  {
    title: "Trải nghiệm Đèn Lồng Hội An",
    date: "12.05.2026",
    rating: "5.0",
    comment: "Trải nghiệm tự dán lụa ngũ sắc rất hay. Nghệ nhân hướng dẫn cực kỳ tỉ mỉ từng nếp gấp vải lụa. Mình đã tự tay hoàn thành chiếc đèn lồng nhỏ mang về làm quà lưu niệm.",
  },
  {
    title: "Nghệ thuật Sơn Mài Bình Dương",
    date: "24.04.2026",
    rating: "4.7",
    comment: "Quy trình cẩn vỏ trứng và mài sơn độc bản rất tốn công phu nhưng thành quả cực kỳ xứng đáng. Workshop chuẩn bị đầy đủ dụng cụ học tập.",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  img: string;
  left: number;
  quote: string;
}

export const mockTestimonials: Testimonial[] = [
  {
    name: "Jennie Kim",
    role: "Du khách",
    img: "/cauchuyennghenhan/Bg.png",
    left: 27,
    quote: "Ngồi buộc từng nút dây, nghe kể chuyện làng nghề, thấy mọi người trong làng vẫn miệt mài làm đèn mỗi mùa Trung Thu… Tự nhiên thấy những thứ tưởng nhỏ bé lại có ý nghĩa ghê. Nếu bạn đang ở Hà Nội và muốn thử cái gì đó khác với cà phê hay mall, mình nghĩ nên thử mấy workshop làng nghề như thế này..",
  },
  {
    name: "Vũ Đinh Trong Thắng",
    role: "Khách du lịch",
    img: "/cauchuyennghenhan/Bg(1).png",
    left: 446,
    quote: "Đến đây mới hiểu tinh hoa dân gian thực sự sống động đến thế nào. Những nét cọ vẽ tranh hay cách nhào đất nặn tò he không chỉ là kỹ thuật, mà là cả một bầu không khí văn hóa trầm tích nhiều năm. Workshop đã giúp tôi chạm vào ký ức tuổi thơ thêm một lần nữa.",
  },
  {
    name: "Trần Gia Lộc",
    role: "Dân địa phương",
    img: "/cauchuyennghenhan/Bg(2).png",
    left: 865,
    quote: "Là một người con Hà Nội, tôi luôn tự hào về các di sản phố cổ. Nhưng chỉ đến khi trực tiếp tham gia trải nghiệm làm đèn cùng các nghệ nhân gạo cội, tôi mới thực sự hiểu được cái hồn và tình yêu nghề cháy bóng của những con người miệt mài giữ lửa quê hương.",
  },
];

export interface ArtisanCard {
  id: number;
  img: string;
  left: number;
  top: number;
  title: string;
  name?: string;
  sub?: string;
}

export const mockArtisans: ArtisanCard[] = [
  { id: 0, img: "/Container.png", left: 0, top: 0, title: "Container 0" },
  { id: 3, img: "/Container(3).png", left: 416, top: 0, title: "Container 3", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 1, img: "/Container(1).png", left: 832, top: 0, title: "Container 1" },
  { id: 4, img: "/Container(4).png", left: 0, top: 415, title: "Container 4" },
  { id: 5, img: "/Container(5).png", left: 416, top: 415, title: "Container 5" },
  { id: 2, img: "/Container(2).png", left: 832, top: 415, title: "Container 2" },
];

export interface CustomerReview {
  author: string;
  date: string;
  rating: string;
  workshopName: string;
  comment: string;
}

export const mockCustomerReviews: CustomerReview[] = [
  {
    author: "Trần Quốc Anh",
    date: "18.05.2026",
    rating: "5.0",
    workshopName: "Gốm Bát Tràng",
    comment: "Buổi học làm gốm Bát Tràng cực kỳ tuyệt vời! Nghệ nhân Cappy Dương hướng dẫn vô cùng chu đáo, không gian xưởng rất truyền thống và ấm áp. Nhất định mình sẽ giới thiệu cho người thân ghé thăm trải nghiệm.",
  },
  {
    author: "Nguyễn Thị Mai",
    date: "02.05.2026",
    rating: "4.8",
    workshopName: "Lụa Vạn Phúc",
    comment: "Trải nghiệm dệt lụa Vạn Phúc rất thú vị. Chúng mình được chạm tay vào khung cửi cổ xưa và tự pha màu thuốc nhuộm thiên nhiên. Một nét văn hoá truyền thống rất trân quý.",
  },
];

export interface OwnedWorkshop {
  id: number;
  title: string;
  description: string;
}

export const mockOwnedWorkshops: OwnedWorkshop[] = [
  {
    id: 1,
    title: "Gốm Bát Tràng",
    description: "Tự tay nhào nặn và vẽ men gốm truyền thống",
  },
];
