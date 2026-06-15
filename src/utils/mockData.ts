import { Workshop, CartItem, FAQ } from "@/types";

export const mockWorkshops: Workshop[] = [
  {
    id: "nhap-mon-gom-thanh-ha",
    title: "Nhập môn trải nghiệm làm gốm Thanh Hà",
    artist: "Trần Sông Lam",
    location: "Hội An - Đà Nẵng",
    price: "200.000đ",
    originalPrice: "1.000.000đ",
    img: "/chitietworkshop/Rectangle25(2).png",
    left: 100,
    top: 585,
    fontClass: "font-jaro",
  },
  {
    id: "pottery-my-linh",
    title: "Tạo hình gốm thủ công tại Pottery My Linh",
    artist: "Nguyễn Mỹ Linh",
    location: "Làng gốm Thanh Hà - Hội An",
    price: "180.000đ",
    originalPrice: "350.000đ",
    img: "/mylinhpottery/image.png",
    left: 530,
    top: 585,
    fontClass: "font-jaro",
  },
  {
    id: "trinh-ceramic-handmade",
    title: "Vẽ họa tiết Hội An cùng Trinh Ceramic Handmade",
    artist: "Lê Trịnh An",
    location: "Làng gốm Thanh Hà - Hội An",
    price: "220.000đ",
    originalPrice: "420.000đ",
    img: "/trinhceramic/clay-hands.png",
    left: 961,
    top: 584,
    fontClass: "font-playfairDisplay",
  },
  {
    id: "chieu-house-pottery",
    title: "Nặn chum mini tại Chieu House Pottery",
    artist: "Phạm Chiêu Huy",
    location: "Làng gốm Thanh Hà - Hội An",
    price: "250.000đ",
    originalPrice: "480.000đ",
    img: "/chieuhouse/image.png",
    left: 100,
    top: 1173,
    fontClass: "font-playfairDisplay",
  },
  {
    id: "hang-dung-souvenir-shop",
    title: "Làm quà lưu niệm gốm tại Hang Dung Souvenir Shop",
    artist: "Huỳnh Hằng Dung",
    location: "Làng gốm Thanh Hà - Hội An",
    price: "160.000đ",
    originalPrice: "300.000đ",
    img: "/Hangdung/image.png",
    left: 530,
    top: 1173,
  },
  {
    id: "gom-men-moc-thanh-ha",
    title: "Trang trí bình gốm men mộc Thanh Hà",
    artist: "Đoàn Nhật Nam",
    location: "Làng gốm Thanh Hà - Hội An",
    price: "280.000đ",
    originalPrice: "520.000đ",
    img: "/chitietworkshop/Rectangle25.png",
    left: 961,
    top: 1172,
  },
];

export const mockCartItems = [
  {
    id: 1,
    title: "Nhập môn sáng tác...",
    price: 200000,
    unitPriceText: "150,000₫",
    img: "/chitietworkshop/Rectangle25(2).png",
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
    title: "NHẬP MÔN LÀM GỐM THANH HÀ",
    subtitle: "CÙNG KHÁM PHÁ TINH HOA NƠI LÀNG GỐM 500 TUỔI",
    img: "/cart/Rectangle71.png",
  }
];

export const mockBookingWorkshop = {
  title: "Workshop Vẽ Lên Gốm",
  artisan: "Cappy Dương",
  location: "119 Phan Chu Trinh, Hải Châu, Đà Nẵng",
  duration: "120 phút",
  capacity: "12 người / buổi",
  selectedTime: "11:00",
  description:
    "Workshop vẽ trên gốm là trải nghiệm sáng tạo, nơi bạn tự tay trang trí các sản phẩm gốm bằng màu sắc và họa tiết theo phong cách riêng. Không cần kinh nghiệm trước đó, bạn sẽ được hướng dẫn các bước cơ bản trong suốt quá trình thực hiện. Sau buổi trải nghiệm, bạn có thể mang về sản phẩm mang dấu ấn cá nhân của mình.",
  included: ["Dụng cụ vẽ & màu", "Sản phẩm gốm mẫu", "Hướng dẫn trực tiếp", "Thành phẩm mang về"],
  images: {
    workshop: "/booking/Image174.png",
    artisan: "/booking/Image176.png",
    artifacts: [
      "/booking/Image177.png",
      "/booking/Image178.png",
      "/booking/Image179.png",
      "/booking/Image181.png",
    ],
  },
};

export const mockBookingCalendar = {
  weekDays: ["MON", "TUE", "WED", "THURS", "FRI", "SAT", "SUN"],
  rows: [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 1, 2, 3, 4, 5],
  ],
  fullDays: [29],
  inactiveDays: [1, 2, 3, 4, 5],
};

export const mockBookingTimeSlots = [
  { period: "Buổi sáng", times: ["08:00", "11:00"] },
  { period: "Buổi chiều", times: ["13:30", "15:00", "16:30"] },
  { period: "Buổi tối", times: ["18:30", "20:00", "21:00"] },
];

export const mockUnavailableBookingTimes = ["16:30", "20:00", "21:00"];

export const mockArtisanAccount = {
  profile: {
    name: "Cappy Dương",
    role: "Nghệ nhân",
    avatar: "/tknghenhan/ChnDungNghNhn.png",
    greeting: "Xin chào, nghệ nhân Cappy Dương!",
    statusMessage:
      "Hiện tại bạn đang có 3 Workshop đang chờ được tổ chức. Hãy chuẩn bị thật tốt nhé. Đội ngũ DISANITY chúc bạn những điều tốt đẹp nhất.",
  },
  metrics: [
    { label: "Tổng số Workshop", value: "5", tone: "terracotta" },
    { label: "Buổi sắp tới", value: "3", tone: "sage" },
    { label: "Tổng lượt đặt", value: "5", tone: "slate" },
    { label: "Thu nhập", value: "2.000.000đ", tone: "terracotta" },
  ],
  personalInfo: [
    { label: "Họ và tên", value: "Cappy Dương" },
    { label: "Email", value: "Duong1234@gmail.com" },
    { label: "Địa chỉ", value: "Phường Hải Châu, thành phố Đà Nẵng" },
    { label: "SDT", value: "0946443560" },
  ],
  bookings: [
    { code: "#DS-8921", customer: "Elena Murphy", initials: "EM", status: "Đã xác nhận", price: "850.000đ", payment: "Đã thanh toán" },
    { code: "#DS-8922", customer: "Julian Schmidt", initials: "JS", status: "Chờ xử lý", price: "1.200.000đ", payment: "Đang chờ" },
    { code: "#DS-8923", customer: "Aiko Kawai", initials: "AK", status: "Đã xác nhận", price: "850.000đ", payment: "Đã thanh toán" },
  ],
  reviews: [
    {
      workshop: "Làm gốm men lam",
      author: "Cappy Dương",
      quote:
        "Trải nghiệm thật sự đáng nhớ. Tôi không chỉ được tự tay làm sản phẩm mà còn hiểu thêm về câu chuyện phía sau mỗi làng nghề.",
    },
    {
      workshop: "Dệt thổ cẩm",
      author: "Cappy Dương",
      quote:
        "Không gian workshop rất truyền thống và ấm cúng. Nghệ nhân hướng dẫn tận tình, ngay cả người mới cũng có thể tạo ra tác phẩm của riêng mình.",
    },
    {
      workshop: "Khắc tranh Đông Hồ",
      author: "Cappy Dương",
      quote:
        "Chuyến đi giúp tôi cảm nhận rõ hơn giá trị của nghề thủ công. Mỗi công đoạn đều chứa đựng sự kiên nhẫn và tay nghề của người nghệ nhân.",
    },
  ],
  workshopCards: [
    {
      title: "Gốm Bát Tràng",
      description: "Tự tay nhào nặn và vẽ men gốm truyền thống",
      price: "1.100.000đ",
      rating: "4.9",
      image: "/tknghenhan/Image.png",
      badge: "Đánh giá cao",
    },
    {
      title: "Lụa Vạn Phúc",
      description: "Kỹ thuật dệt khung cửi và nhuộm lụa tơ tằm",
      price: "1.350.000đ",
      rating: "4.8",
      image: "/tknghenhan/Image(1).png",
    },
    {
      title: "Đèn Lồng Hội An",
      description: "Làm khung tre và dán lụa ngũ sắc",
      price: "750.000đ",
      rating: "5.0",
      image: "/tknghenhan/Image(2).png",
    },
    {
      title: "Sơn Mài Bình Dương",
      description: "Nghệ thuật cẩn vỏ trứng và mài sơn độc bản",
      price: "1.450.000đ",
      rating: "4.7",
      image: "/tknghenhan/Image(3).png",
    },
  ],
  cta: {
    title: "Tạo thêm các Workshop mới",
    description: "Dành cho các nghệ nhân có nhu cầu tạo thêm các sự kiện mới",
    action: "Tạo ngay",
  },
};

export const mockUserAccount = {
  profile: {
    name: "Cappy Dương",
    role: "Lữ khách",
    avatar: "/tkkhachhang/ChnDungNghNhn.png",
    greeting: "Xin chào, lữ khách Cappy Dương!",
    statusMessage:
      "Hiện tại bạn đang có 2 địa điểm cần ghé thăm. Hãy để ý lịch trình của mình nhé. Chúc bạn có những trải nghiệm tuyệt vời cùng DISANITY.",
  },
  metrics: [
    { label: "Số Workshop đã đặt", value: "3", tone: "terracotta" },
    { label: "Buổi sắp tới", value: "3", tone: "terracotta" },
    { label: "Tổng lượt đặt", value: "5", tone: "terracotta" },
    { label: "Chi tiêu", value: "800.000đ", tone: "terracotta" },
  ],
  personalInfo: [
    { label: "Họ và tên", value: "Cappy Dương" },
    { label: "Email", value: "Duong1234@gmail.com" },
    { label: "Địa chỉ", value: "Phường Hải Châu, thành phố Đà Nẵng" },
    { label: "SDT", value: "0946443560" },
  ],
  upcomingWorkshops: [
    {
      title: "Nhập môn sáng tác...",
      image: "/tkkhachhang/Rectangle9.png",
      packageName: "Trọn gói",
      quantity: 1,
      price: "200.000đ",
      details: [
        "Thể loại: Mỹ thuật truyền thống - đương đại",
        "Loại hình: Sơn mài",
        "Địa điểm: Làng Hạ Thái - Hà Nội",
        "Nghệ nhân: Trần Sông Lam",
        "Thời lượng: 6 tiếng",
        "Ngày 28/3/2026",
      ],
    },
    {
      title: "Nhập môn sáng tác...",
      image: "/tkkhachhang/Rectangle9(1).png",
      packageName: "Trọn gói",
      quantity: 1,
      price: "200.000đ",
      details: [
        "Thể loại: Mỹ thuật truyền thống - đương đại",
        "Loại hình: Sơn mài",
        "Địa điểm: Làng Hạ Thái - Hà Nội",
        "Nghệ nhân: Trần Sông Lam",
        "Thời lượng: 6 tiếng",
        "Ngày 28/3/2026",
      ],
    },
  ],
  reviews: [
    {
      workshop: "Làm gốm men lam",
      author: "Cappy Dương",
      quote:
        "Trải nghiệm thật sự đáng nhớ. Tôi không chỉ được tự tay làm sản phẩm mà còn hiểu thêm về câu chuyện phía sau mỗi làng nghề.",
    },
    {
      workshop: "Dệt thổ cẩm",
      author: "Cappy Dương",
      quote:
        "Không gian workshop rất truyền thống và ấm cúng. Nghệ nhân hướng dẫn tận tình, ngay cả người mới cũng có thể tạo ra tác phẩm của riêng mình.",
    },
    {
      workshop: "Khắc tranh Đông Hồ",
      author: "Cappy Dương",
      quote:
        "Chuyến đi giúp tôi cảm nhận rõ hơn giá trị của nghề thủ công. Mỗi công đoạn đều chứa đựng sự kiên nhẫn và tay nghề của người nghệ nhân.",
    },
  ],
  cta: {
    title: "Đặt lịch riêng với nghệ nhân ngay!",
    description: "Dành cho các nhóm khách hàng từ 4 người trở lên",
    action: "Tạo ngay",
  },
};

export const mockTicketQr = {
  title: "Thanh Toán Thành Công",
  subtitle: "Chúc mừng bạn đã mua vé thành công!",
  progressSteps: ["Giỏ hàng", "Thông tin khách hàng", "Thanh toán"],
  ticket: {
    image: "/ticketqr/Rectangle8966.png",
    qr: "/ticketqr/Image180.png",
    brand: "DiSanity",
    destinationTop: "Làng Gốm",
    destinationBottom: "Thanh Hà",
    barcodeValue: "39238749834547241",
  },
  details: {
    title: "Thông tin chi tiết",
    background: "/ticketqr/Rectangle4445.png",
    items: [
      { label: "Mã đơn", value: "2037834500" },
      { label: "Loại vé", value: "WORKSHOP" },
      { label: "Khu vực", value: "KHU_SANHTANGA_LANGGOMTHANHHA" },
      { label: "Số thứ tự", value: "2 & 3" },
    ],
  },
  terms: {
    title: "Điều khoản và điều kiện",
    background: "/ticketqr/Rectangle17534.png",
    items: [
      "Vui lòng đến trước giờ workshop ít nhất 15 phút.",
      "Xuất trình vé điện tử hoặc mã QR khi check-in.",
      "Vé chỉ áp dụng cho người đã đăng ký trước.",
      "Có thể hủy miễn phí trước 48 giờ diễn ra workshop.",
      "Việc đến muộn có thể ảnh hưởng đến trải nghiệm của những người tham gia khác.",
      "Vui lòng tôn trọng nghệ nhân, không gian workshop và văn hóa địa phương.",
      "Một số workshop sử dụng vật liệu thủ công và công cụ truyền thống.",
      "Khuyến khích mặc trang phục thoải mái để thuận tiện trải nghiệm thực hành.",
      "Trong trường hợp thay đổi lịch trình, người tham gia sẽ được thông báo trước.",
      "Cảm ơn bạn đã góp phần gìn giữ và lan tỏa giá trị di sản văn hóa.",
    ],
  },
  supportText: "Mọi sự cố xin vui lòng liên hệ: 03324233282",
  nextLabel: "TIẾP THEO",
};

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

export interface WorkshopDetailGalleryImage {
  src: string;
  alt: string;
  featured?: boolean;
}

export interface WorkshopDetailFact {
  icon: "timer" | "languages" | "users";
  label: string;
}

export interface WorkshopDetailIncludedItem {
  title: string;
  description: string;
}

export interface WorkshopDetailReview {
  rating: number;
  quote: string;
  title: string;
  author: string;
}

export interface WorkshopDetailData {
  title: string;
  category: string;
  location: string;
  breadcrumb: string;
  rating: number;
  reviewCount: number;
  pricePerGuest: number;
  priceText: string;
  taxText: string;
  dateLabel: string;
  guestLimit: number;
  defaultGuestCount: number;
  galleryImages: WorkshopDetailGalleryImage[];
  quickFacts: WorkshopDetailFact[];
  introTitle: string;
  introSubtitle: string;
  introDescription: string;
  introImage: string;
  introImageAlt: string;
  includedHeading: string;
  includedDescription: string;
  includedItems: WorkshopDetailIncludedItem[];
  artisanEyebrow: string;
  artisanName: string;
  artisanTitle: string;
  artisanDescription: string;
  artisanImage: string;
  artisanImageAlt: string;
  artisanTraits: string[];
  artisanStats: Array<{ value: string; label: string }>;
  reviewsHeading: string;
  reviewsDescription: string;
  reviews: WorkshopDetailReview[];
  consultationImage: string;
  consultationTitle: string;
  consultationDescription: string;
}

export const mockWorkshopDetail: WorkshopDetailData = {
  title: "Nhập môn làm gốm Thanh Hà",
  category: "Gốm cơ bản",
  location: "Hội An - Đà Nẵng",
  breadcrumb: "Workshop > Gốm cơ bản > Nhập môn làm gốm Thanh Hà",
  rating: 4.5,
  reviewCount: 82,
  pricePerGuest: 200000,
  priceText: "200.000đ/người",
  taxText: "Đã bao gồm thuế",
  dateLabel: "Thứ Tư, 27 Tháng 5",
  guestLimit: 8,
  defaultGuestCount: 2,
  galleryImages: [
    {
      src: "/chitietworkshop/Rectangle25.png",
      alt: "Nghệ nhân hướng dẫn tạo dáng gốm Thanh Hà",
      featured: true,
    },
    {
      src: "/chitietworkshop/Rectangle25(1).png",
      alt: "Không gian workshop làm gốm",
    },
    {
      src: "/chitietworkshop/Rectangle25(2).png",
      alt: "Sản phẩm gốm sau khi hoàn thiện",
    },
  ],
  quickFacts: [
    { icon: "timer", label: "6 tiếng" },
    { icon: "languages", label: "Việt & Anh" },
    { icon: "users", label: "Tối đa 8 khách" },
  ],
  introTitle: "Nhập môn làm gốm Thanh Hà",
  introSubtitle: "Làng gốm Thanh Hà Hội An, nét đẹp hoài cổ đã hơn 500 năm tuổi",
  introDescription:
    "Làng gốm Thanh Hà là một trong số những điểm du lịch tham quan và khám phá làng nghề truyền thống tại phố cổ Hội An. Với tuổi đời hơn 500 năm, làng gốm Thanh Hà mang trong mình vẻ đẹp trầm mặc và hoài cổ mà hiếm nơi nào có được.",
  introImage: "/chitietworkshop/PlaceholderImage.png",
  introImageAlt: "Khung cảnh làng gốm Thanh Hà",
  includedHeading: "Bao gồm trong chuyến đi",
  includedDescription:
    "Những vật phẩm này sẽ được cung cấp miễn phí khi tham gia trải nghiệm Workshop.",
  includedItems: [
    {
      title: "Nguyên liệu & Dụng cụ làm gốm",
      description:
        "Đất sét, bàn xoay, dao chuốt, màu trang trí và vật dụng bảo hộ được chuẩn bị sẵn.",
    },
    {
      title: "Tiệc trà sen & Bánh",
      description:
        "Khoảng nghỉ nhẹ nhàng với trà sen, bánh địa phương và trò chuyện cùng nghệ nhân.",
    },
    {
      title: "Bí quyết từ Nghệ nhân Ưu tú",
      description:
        "Hướng dẫn trực tiếp các kỹ thuật nắn, chuốt và kể chuyện qua chất liệu gốm.",
    },
  ],
  artisanEyebrow: "Nghệ nhân",
  artisanName: "Trần Sông Lam",
  artisanTitle:
    "Gặp gỡ nghệ nhân: Trần Sông Lam và khám phá những câu chuyện độc đáo về làm gốm",
  artisanDescription:
    "Không chỉ đơn thuần là người thợ, nghệ nhân làm gốm còn là người kể chuyện bằng chất liệu truyền thống. Mỗi tác phẩm là sự kết hợp giữa kỹ thuật thủ công lâu đời và cảm hứng sáng tạo cá nhân.",
  artisanImage: "/chitietworkshop/ImagePlaceHolder.png",
  artisanImageAlt: "Nghệ nhân Trần Sông Lam trong xưởng gốm",
  artisanTraits: [
    "Uy tín",
    "Trách nhiệm",
    "Tận tâm",
    "Chuyên môn cao",
    "Kỹ thuật tốt",
    "Giải thưởng danh giá",
  ],
  artisanStats: [
    { value: "15 năm", label: "Kinh nghiệm" },
    { value: "15+", label: "Giải thưởng" },
    { value: "50+", label: "Workshop" },
  ],
  reviewsHeading: "Phản hồi của khách hàng",
  reviewsDescription:
    "Những đánh giá thực tế của khách hàng đã trải nghiệm Workshop này.",
  reviews: [
    {
      rating: 4,
      quote:
        "Trải nghiệm tuyệt vời, tôi khó tính nên 4 sao là cao nhất rồi đó. Hy vọng gốm Thanh Hà sẽ được nhiều người biết đến hơn trong tương lai.",
      title: "Một buổi chiều rất đáng nhớ",
      author: "Phung Le Hoang Nhi",
    },
    {
      rating: 5,
      quote:
        "Tôi cảm thấy mình như được chậm lại, kiên nhẫn hơn. Thầy Lam rất dễ thương và nhiệt tình, 5 sao cho thầy.",
      title: "Tôi rất thích trải nghiệm này",
      author: "Duong Hoang Bao Tran",
    },
    {
      rating: 5,
      quote:
        "Không gian yên bình, hướng dẫn rõ ràng, thành phẩm mang về có câu chuyện riêng. Tôi sẽ ghé lại thêm lần nữa.",
      title: "Cảm thấy rất tuyệt vời",
      author: "Pham Le Minh Nguyet",
    },
  ],
  consultationImage: "/chitietworkshop/Rectangle17527.png",
  consultationTitle: "Cần tư vấn riêng?",
  consultationDescription:
    "Nhận lịch trình cá nhân hóa từ chuyên gia văn hóa của chúng tôi.",
};

export const mockWorkshopDetails: Record<string, WorkshopDetailData> = {
  "nhap-mon-gom-thanh-ha": mockWorkshopDetail,
  "pottery-my-linh": {
    ...mockWorkshopDetail,
    title: "Tạo hình gốm thủ công tại Pottery My Linh",
    category: "Tạo hình gốm",
    location: "Làng gốm Thanh Hà - Hội An",
    breadcrumb: "Workshop > Làng gốm Thanh Hà > Pottery My Linh",
    rating: 4.8,
    reviewCount: 64,
    pricePerGuest: 180000,
    priceText: "180.000đ/người",
    guestLimit: 10,
    galleryImages: [
      {
        src: "/mylinhpottery/image.png",
        alt: "Không gian Pottery My Linh",
        featured: true,
      },
      {
        src: "/mylinhpottery/image copy.png",
        alt: "Bàn xoay và đất sét tại Pottery My Linh",
      },
      {
        src: "/mylinhpottery/image copy 2.png",
        alt: "Sản phẩm gốm tạo hình thủ công",
      },
    ],
    quickFacts: [
      { icon: "timer", label: "3 tiếng" },
      { icon: "languages", label: "Việt & Anh" },
      { icon: "users", label: "Tối đa 10 khách" },
    ],
    introTitle: "Tạo hình gốm thủ công tại Pottery My Linh",
    introSubtitle: "Một buổi làm quen với đất sét, bàn xoay và nhịp sống Thanh Hà",
    introDescription:
      "Workshop tập trung vào kỹ thuật nhào đất, giữ tâm trên bàn xoay và tạo dáng các món gốm nhỏ. Người mới sẽ được hướng dẫn từng bước để hoàn thiện một sản phẩm mộc mang về sau buổi học.",
    introImage: "/mylinhpottery/image copy 2.png",
    introImageAlt: "Góc trưng bày sản phẩm Pottery My Linh",
    artisanName: "Nguyễn Mỹ Linh",
    artisanTitle:
      "Gặp gỡ nghệ nhân Nguyễn Mỹ Linh và học cách tạo hình gốm bằng đôi tay",
    artisanDescription:
      "Nghệ nhân Mỹ Linh theo nghề từ gia đình, quen với lối hướng dẫn chậm rãi và gần gũi. Chị chú trọng cảm giác tay khi chạm đất, giúp người tham gia hiểu vì sao mỗi sản phẩm gốm Thanh Hà đều có nét riêng.",
    artisanImage: "/mylinhpottery/image copy.png",
    artisanImageAlt: "Nghệ nhân Nguyễn Mỹ Linh trong xưởng gốm",
    artisanStats: [
      { value: "12 năm", label: "Kinh nghiệm" },
      { value: "30+", label: "Mẫu gốm" },
      { value: "40+", label: "Workshop" },
    ],
    reviews: [
      {
        rating: 5,
        quote:
          "Lần đầu dùng bàn xoay nhưng được hướng dẫn rất kỹ. Thành phẩm hơi méo một chút mà nhìn lại thấy rất vui.",
        title: "Rất hợp cho người mới",
        author: "Nguyen Mai Anh",
      },
      {
        rating: 5,
        quote:
          "Không gian yên tĩnh, cô Linh giải thích dễ hiểu và để tụi mình tự thử khá nhiều.",
        title: "Một buổi chiều thư giãn",
        author: "Tran Quoc Bao",
      },
      {
        rating: 4,
        quote:
          "Giá ổn, trải nghiệm thực tế hơn mình nghĩ. Phần nhào đất là vui nhất.",
        title: "Đáng thử khi đến Hội An",
        author: "Le Khanh Vy",
      },
    ],
  },
  "trinh-ceramic-handmade": {
    ...mockWorkshopDetail,
    title: "Vẽ họa tiết Hội An cùng Trinh Ceramic Handmade",
    category: "Trang trí gốm",
    location: "Làng gốm Thanh Hà - Hội An",
    breadcrumb: "Workshop > Làng gốm Thanh Hà > Trinh Ceramic Handmade",
    rating: 4.7,
    reviewCount: 58,
    pricePerGuest: 220000,
    priceText: "220.000đ/người",
    guestLimit: 12,
    galleryImages: [
      {
        src: "/trinhceramic/clay-hands.png",
        alt: "Không gian Trinh Ceramic Handmade",
        featured: true,
      },
      {
        src: "/trinhceramic/artist-vase.png",
        alt: "Nghệ nhân vẽ họa tiết xanh trên bình gốm",
      },
      {
        src: "/trinhceramic/flower-vases.png",
        alt: "Bình gốm họa tiết hoa sen tại Trinh Ceramic Handmade",
      },
    ],
    quickFacts: [
      { icon: "timer", label: "2.5 tiếng" },
      { icon: "languages", label: "Việt & Anh" },
      { icon: "users", label: "Tối đa 12 khách" },
    ],
    introTitle: "Vẽ họa tiết Hội An cùng Trinh Ceramic Handmade",
    introSubtitle: "Trang trí gốm bằng màu, nét cọ và cảm hứng phố cổ",
    introDescription:
      "Bạn sẽ chọn một phôi gốm đã nung mộc, phác họa họa tiết và phủ màu thủ công. Chủ đề gợi ý xoay quanh mái ngói Hội An, hoa văn Thanh Hà và những mảng màu ấm của làng nghề.",
    introImage: "/trinhceramic/flower-vases.png",
    introImageAlt: "Gốm trang trí tại Trinh Ceramic Handmade",
    includedItems: [
      {
        title: "Phôi gốm & màu vẽ",
        description:
          "Mỗi khách được chuẩn bị một phôi gốm, màu ceramic, cọ vẽ và giấy phác thảo.",
      },
      {
        title: "Hướng dẫn phối họa tiết",
        description:
          "Nghệ nhân hỗ trợ chọn bố cục, phối màu và hoàn thiện bề mặt sản phẩm.",
      },
      {
        title: "Thành phẩm cá nhân",
        description:
          "Sản phẩm sau buổi workshop có thể mang về làm kỷ niệm hoặc quà tặng.",
      },
    ],
    artisanName: "Lê Trịnh An",
    artisanTitle:
      "Gặp gỡ nghệ nhân Lê Trịnh An và thử kể chuyện Hội An trên nền gốm",
    artisanDescription:
      "Trịnh An yêu thích những họa tiết nhỏ của phố cổ và đưa chúng vào sản phẩm gốm thủ công. Workshop của anh phù hợp với người muốn một trải nghiệm nhẹ nhàng, nhiều màu sắc và dễ tạo thành phẩm đẹp.",
    artisanImage: "/trinhceramic/artist-vase.png",
    artisanImageAlt: "Nghệ nhân Lê Trịnh An hướng dẫn vẽ gốm",
    artisanStats: [
      { value: "9 năm", label: "Kinh nghiệm" },
      { value: "120+", label: "Họa tiết" },
      { value: "35+", label: "Workshop" },
    ],
    reviews: [
      {
        rating: 5,
        quote:
          "Mình không giỏi vẽ nhưng vẫn làm được một chiếc ly rất xinh. Anh An sửa nét rất tinh tế.",
        title: "Dễ thương và nhiều màu sắc",
        author: "Hoang Linh Chi",
      },
      {
        rating: 4,
        quote:
          "Workshop nhẹ nhàng, phù hợp đi cùng bạn bè. Phôi gốm có nhiều mẫu để chọn.",
        title: "Một trải nghiệm đáng yêu",
        author: "Pham Gia Han",
      },
      {
        rating: 5,
        quote:
          "Thích nhất là phần nghe kể ý nghĩa hoa văn Thanh Hà trước khi bắt đầu vẽ.",
        title: "Có câu chuyện phía sau sản phẩm",
        author: "Vo Minh Thu",
      },
    ],
  },
  "chieu-house-pottery": {
    ...mockWorkshopDetail,
    title: "Nặn chum mini tại Chieu House Pottery",
    category: "Nặn gốm thủ công",
    location: "Làng gốm Thanh Hà - Hội An",
    breadcrumb: "Workshop > Làng gốm Thanh Hà > Chieu House Pottery",
    rating: 4.9,
    reviewCount: 73,
    pricePerGuest: 250000,
    priceText: "250.000đ/người",
    guestLimit: 8,
    galleryImages: [
      {
        src: "/chieuhouse/image.png",
        alt: "Không gian Chieu House Pottery",
        featured: true,
      },
      {
        src: "/chieuhouse/image copy.png",
        alt: "Chum gốm mini đang tạo dáng",
      },
      {
        src: "/chieuhouse/image copy 2.png",
        alt: "Bộ sản phẩm gốm tại Chieu House Pottery",
      },
    ],
    quickFacts: [
      { icon: "timer", label: "4 tiếng" },
      { icon: "languages", label: "Việt & Anh" },
      { icon: "users", label: "Tối đa 8 khách" },
    ],
    introTitle: "Nặn chum mini tại Chieu House Pottery",
    introSubtitle: "Từ khối đất nhỏ đến dáng chum mộc mạc của làng Thanh Hà",
    introDescription:
      "Buổi học hướng dẫn cách chia đất, dựng thân, vuốt miệng và tạo dáng chum mini. Người tham gia sẽ hiểu thêm vì sao những vật dụng bình dị như chum, hũ, bình nước lại là linh hồn của gốm Thanh Hà.",
    introImage: "/chieuhouse/image copy 2.png",
    introImageAlt: "Sản phẩm chum mini trong workshop",
    artisanName: "Phạm Chiêu Huy",
    artisanTitle:
      "Gặp gỡ nghệ nhân Phạm Chiêu Huy và học cách giữ dáng gốm truyền thống",
    artisanDescription:
      "Chiêu Huy theo đuổi các dáng gốm dân dụng Thanh Hà, đặc biệt là chum và hũ nhỏ. Anh hướng dẫn kỹ phần dựng phom để người mới cảm nhận được sự cân bằng giữa lực tay và độ ẩm của đất.",
    artisanImage: "/chieuhouse/image copy.png",
    artisanImageAlt: "Nghệ nhân Phạm Chiêu Huy bên bàn nặn gốm",
    artisanStats: [
      { value: "14 năm", label: "Kinh nghiệm" },
      { value: "20+", label: "Dáng chum" },
      { value: "45+", label: "Workshop" },
    ],
    reviews: [
      {
        rating: 5,
        quote:
          "Phần dựng miệng chum khó hơn tưởng tượng nhưng được hướng dẫn rất kiên nhẫn.",
        title: "Thực tế và rất đã tay",
        author: "Dang Minh Quan",
      },
      {
        rating: 5,
        quote:
          "Mình thích cách workshop gắn sản phẩm nhỏ với câu chuyện đồ dùng xưa của làng.",
        title: "Có chiều sâu văn hóa",
        author: "Nguyen Tuong Vy",
      },
      {
        rating: 4,
        quote:
          "Không gian hơi nhỏ nhưng ấm cúng, thành phẩm mang về rất đáng yêu.",
        title: "Trải nghiệm ấm áp",
        author: "Bui Nhat Linh",
      },
    ],
  },
  "hang-dung-souvenir-shop": {
    ...mockWorkshopDetail,
    title: "Làm quà lưu niệm gốm tại Hang Dung Souvenir Shop",
    category: "Quà lưu niệm gốm",
    location: "Làng gốm Thanh Hà - Hội An",
    breadcrumb: "Workshop > Làng gốm Thanh Hà > Hang Dung Souvenir Shop",
    rating: 4.6,
    reviewCount: 49,
    pricePerGuest: 160000,
    priceText: "160.000đ/người",
    guestLimit: 14,
    galleryImages: [
      {
        src: "/Hangdung/image.png",
        alt: "Không gian Hang Dung Souvenir Shop",
        featured: true,
      },
      {
        src: "/Hangdung/image copy.png",
        alt: "Kệ quà lưu niệm gốm Thanh Hà",
      },
      {
        src: "/Hangdung/image copy 2.png",
        alt: "Sản phẩm gốm nhỏ làm quà tặng",
      },
    ],
    quickFacts: [
      { icon: "timer", label: "2 tiếng" },
      { icon: "languages", label: "Việt & Anh" },
      { icon: "users", label: "Tối đa 14 khách" },
    ],
    introTitle: "Làm quà lưu niệm gốm tại Hang Dung Souvenir Shop",
    introSubtitle: "Tạo một món quà nhỏ mang dấu ấn Thanh Hà và phố Hội",
    introDescription:
      "Workshop phù hợp với nhóm bạn, gia đình hoặc khách muốn trải nghiệm nhanh. Bạn sẽ chọn dáng gốm nhỏ, trang trí bằng màu và ký hiệu riêng để biến sản phẩm thành một món quà lưu niệm cá nhân.",
    introImage: "/Hangdung/image copy 2.png",
    introImageAlt: "Quà lưu niệm gốm tại Hang Dung",
    includedItems: [
      {
        title: "Phôi quà lưu niệm",
        description:
          "Có nhiều mẫu nhỏ như chuông gió, tượng mini, ly nhỏ và thẻ treo gốm.",
      },
      {
        title: "Bộ màu trang trí",
        description:
          "Màu, cọ, khăn lau và dụng cụ hoàn thiện bề mặt được chuẩn bị sẵn.",
      },
      {
        title: "Gói thành phẩm",
        description:
          "Sản phẩm được hỗ trợ đóng gói đơn giản để mang về hoặc tặng bạn bè.",
      },
    ],
    artisanName: "Huỳnh Hằng Dung",
    artisanTitle:
      "Gặp gỡ nghệ nhân Huỳnh Hằng Dung và làm món quà gốm của riêng bạn",
    artisanDescription:
      "Hằng Dung quen làm các sản phẩm gốm nhỏ cho khách ghé làng. Chị thích biến workshop thành một buổi trò chuyện vui, nơi mỗi món quà đều có tên người làm và một kỷ niệm riêng.",
    artisanImage: "/Hangdung/image copy.png",
    artisanImageAlt: "Nghệ nhân Huỳnh Hằng Dung trong cửa hàng gốm",
    artisanStats: [
      { value: "10 năm", label: "Kinh nghiệm" },
      { value: "80+", label: "Mẫu quà" },
      { value: "55+", label: "Workshop" },
    ],
    reviews: [
      {
        rating: 5,
        quote:
          "Workshop nhanh, vui và hợp với gia đình có trẻ nhỏ. Thành phẩm được gói rất xinh.",
        title: "Rất hợp để làm quà",
        author: "Tran Bao Ngoc",
      },
      {
        rating: 4,
        quote:
          "Mình thích sự thân thiện của cô Dung. Có nhiều mẫu nhỏ để chọn.",
        title: "Dễ tham gia",
        author: "Nguyen Hoang Phuc",
      },
      {
        rating: 5,
        quote:
          "Chiếc chuông gió mình làm hơi lệch nhưng nhìn rất có duyên. Kỷ niệm đáng nhớ.",
        title: "Nhỏ mà vui",
        author: "Le Minh Chau",
      },
    ],
  },
  "gom-men-moc-thanh-ha": {
    ...mockWorkshopDetail,
    title: "Trang trí bình gốm men mộc Thanh Hà",
    category: "Trang trí men mộc",
    location: "Làng gốm Thanh Hà - Hội An",
    breadcrumb: "Workshop > Làng gốm Thanh Hà > Bình gốm men mộc",
    rating: 4.8,
    reviewCount: 61,
    pricePerGuest: 280000,
    priceText: "280.000đ/người",
    guestLimit: 9,
    galleryImages: [
      {
        src: "/chitietworkshop/Rectangle25.png",
        alt: "Bình gốm men mộc Thanh Hà",
        featured: true,
      },
      {
        src: "/chitietworkshop/Rectangle25(1).png",
        alt: "Không gian trang trí gốm men mộc",
      },
      {
        src: "/chitietworkshop/PlaceholderImage.png",
        alt: "Chi tiết họa tiết trên bình gốm",
      },
    ],
    quickFacts: [
      { icon: "timer", label: "3.5 tiếng" },
      { icon: "languages", label: "Việt & Anh" },
      { icon: "users", label: "Tối đa 9 khách" },
    ],
    introTitle: "Trang trí bình gốm men mộc Thanh Hà",
    introSubtitle: "Thử phủ màu, tạo vệt và giữ lại vẻ thô mộc của đất nung",
    introDescription:
      "Buổi workshop dành cho người muốn đi sâu hơn vào bề mặt gốm. Bạn sẽ học cách xử lý nền, tạo họa tiết đơn giản và hoàn thiện bình gốm theo tinh thần mộc mạc của Thanh Hà.",
    introImage: "/chitietworkshop/Rectangle25(2).png",
    introImageAlt: "Bình gốm sau khi hoàn thiện men mộc",
    artisanName: "Đoàn Nhật Nam",
    artisanTitle:
      "Gặp gỡ nghệ nhân Đoàn Nhật Nam và khám phá vẻ đẹp của men mộc",
    artisanDescription:
      "Nhật Nam quan tâm đến sắc độ tự nhiên của đất nung và những vệt màu tiết chế. Anh hướng dẫn người tham gia quan sát bề mặt gốm, chọn nhịp cọ và giữ lại sự không hoàn hảo duyên dáng của thủ công.",
    artisanImage: "/chitietworkshop/ImagePlaceHolder.png",
    artisanImageAlt: "Nghệ nhân Đoàn Nhật Nam trong xưởng gốm",
    artisanStats: [
      { value: "11 năm", label: "Kinh nghiệm" },
      { value: "25+", label: "Dòng men" },
      { value: "38+", label: "Workshop" },
    ],
    reviews: [
      {
        rating: 5,
        quote:
          "Mình rất thích phần phối màu ít nhưng có điểm nhấn. Thành phẩm nhìn tinh tế hơn mong đợi.",
        title: "Đẹp theo kiểu mộc",
        author: "Pham Anh Thu",
      },
      {
        rating: 5,
        quote:
          "Anh Nam hướng dẫn kỹ, đặc biệt là cách kiểm soát nét cọ trên nền gốm.",
        title: "Học được nhiều kỹ thuật",
        author: "Doan Minh Khang",
      },
      {
        rating: 4,
        quote:
          "Buổi học vừa đủ chuyên sâu, phù hợp ai đã từng thử làm gốm cơ bản.",
        title: "Có chiều sâu hơn workshop nhập môn",
        author: "Vu Gia Bao",
      },
    ],
  },
};

export const getMockWorkshopDetail = (workshopId: string | null) =>
  mockWorkshopDetails[workshopId ?? ""] ?? mockWorkshopDetail;

export interface ArtisanProfileStat {
  value: string;
  label: string;
  tone?: "teal" | "gold";
}

export interface ArtisanProfileEvent {
  title: string;
  image: string;
  alt: string;
}

export interface ArtisanProfileReview {
  rating: number;
  quote: string;
  author: string;
  role: string;
}

export interface ArtisanProfileData {
  heroImage: string;
  heroTitleSmall: string;
  heroTitleLarge: string;
  profileName: string;
  profileSubtitle: string;
  profileImage: string;
  profileImageAlt: string;
  bioTitle: string;
  bioDescription: string;
  stats: ArtisanProfileStat[];
  storyCards: Array<{ index: string; title: string; description: string }>;
  transmissionTitle: string;
  transmissionDescription: string;
  eventHeroImage: string;
  eventHeroAlt: string;
  eventHeading: string;
  eventDescription: string;
  eventImages: ArtisanProfileEvent[];
  galleryImages: ArtisanProfileEvent[];
  reviewsHeading: string;
  reviewsDescription: string;
  reviews: ArtisanProfileReview[];
  contactQuote: string;
  contactHeading: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

export const mockArtisanProfile: ArtisanProfileData = {
  heroImage: "/hosonghenhan/Image169.png",
  heroTitleSmall: "Nghệ nhân",
  heroTitleLarge: "Làm gốm",
  profileName: "Nghệ nhân Thái Thị Hòe",
  profileSubtitle: "Người giữ lửa làng gốm Thanh Hà",
  profileImage: "/hosonghenhan/20_06_17 4 thg 6, 2026.png",
  profileImageAlt: "Nghệ nhân Thái Thị Hòe đang vẽ họa tiết trên bình gốm",
  bioTitle: "Nghệ nhân Thái Thị Hòe",
  bioDescription:
    "Bà Thái Thị Hòe là một nghệ nhân làng gốm với hơn 30 năm gắn bó cùng đất và lửa. Sinh ra trong một gia đình có truyền thống làm gốm, bà dành phần lớn cuộc đời để gìn giữ những kỹ thuật thủ công truyền thống và truyền lại nghề cho thế hệ trẻ.",
  stats: [
    { value: "40+", label: "Năm gắn bó với nghề", tone: "teal" },
    { value: "5700+", label: "Sản phẩm thủ công", tone: "gold" },
    { value: "12", label: "Triển lãm nghệ thuật", tone: "gold" },
    { value: "27", label: "Học viên truyền nghề", tone: "teal" },
  ],
  storyCards: [
    {
      index: "1",
      title: "Gìn giữ tinh hoa",
      description:
        "Những nghệ nhân là người bảo tồn kỹ thuật truyền thống qua nhiều thế hệ, được gìn giữ bằng ký ức nghề.",
    },
    {
      index: "2",
      title: "Truyền dạy & lan toả",
      description:
        "Không chỉ làm nghề, họ còn mở lớp, tổ chức workshop và hướng dẫn thế hệ trẻ để văn hoá được tiếp nối.",
    },
    {
      index: "3",
      title: "Sáng tạo & thích ứng",
      description:
        "Nghệ nhân không ngừng đổi mới nhưng vẫn giữ cốt lõi. Đó là cách làng nghề tồn tại và phát triển bền vững.",
    },
  ],
  transmissionTitle: "Truyền nghề",
  transmissionDescription:
    "Truyền nghề không chỉ là dạy lại một kỹ thuật, mà là trao đi cả kinh nghiệm, ký ức và tình yêu dành cho nghề. Mỗi thế hệ được tiếp nối là một lần làng nghề được thắp sáng thêm một lần nữa.",
  eventHeroImage: "/hosonghenhan/Image158.png",
  eventHeroAlt: "Làng gốm Thanh Hà",
  eventHeading: "Sự kiện",
  eventDescription:
    "Mỗi sự kiện là một bước tiến trong hành trình làm nghề, từ việc học hỏi, thử nghiệm ý tưởng đến kết nối cộng đồng và mở rộng ảnh hưởng cá nhân.",
  eventImages: [
    {
      title: "Danang Plaza",
      image: "/hosonghenhan/Container.png",
      alt: "Bìa tạp chí về lồng đèn Hội An",
    },
    {
      title: "Vietnam Hoi An Pottery Village",
      image: "/hosonghenhan/Container(1).png",
      alt: "Tượng gốm truyền thống Hội An",
    },
    {
      title: "Thanh Hà Craft Fair",
      image: "/hosonghenhan/Container(2).png",
      alt: "Sự kiện gốm thủ công",
    },
  ],
  galleryImages: [
    {
      title: "Gốm trang trí",
      image: "/hosonghenhan/Image159.png",
      alt: "Bộ sưu tập gốm trang trí nhiều màu",
    },
    {
      title: "Chuốt gốm",
      image: "/hosonghenhan/Image160.png",
      alt: "Đôi tay nghệ nhân chuốt bát gốm",
    },
    {
      title: "Khắc hoa văn",
      image: "/hosonghenhan/Image161.png",
      alt: "Khắc hoa văn trên thân bình gốm",
    },
  ],
  reviewsHeading: "Phản hồi của khách hàng",
  reviewsDescription:
    "Những cảm nhận chân thật từ du khách sau khi trải nghiệm và học nghề cùng các nghệ nhân.",
  reviews: [
    {
      rating: 5,
      quote:
        "Trải nghiệm rất thú vị, mình lần đầu được tự tay nặn và tạo hình gốm. Không khí gần gũi và dễ tham gia.",
      author: "Minh Anh",
      role: "Du khách Hà Nội",
    },
    {
      rating: 5,
      quote:
        "Workshop được hướng dẫn chi tiết, phù hợp cả với người chưa từng làm gốm. Câu chuyện của cô Hòe rất truyền cảm hứng.",
      author: "Hoàng Nam",
      role: "Sinh viên mỹ thuật",
    },
    {
      rating: 4,
      quote:
        "Không gian mang lại cảm giác thư giãn, hoạt động vừa vui vừa có tính khám phá. Mình rất muốn quay lại.",
      author: "Bảo Trân",
      role: "Du khách TP.HCM",
    },
  ],
  contactQuote: "“Giữ nghề là giữ hồn đất, để ký ức còn chỗ quay về.”",
  contactHeading: "Trở thành người giữ nghề",
  contactInfo: {
    email: "disanity@gmail.com",
    phone: "0898462817",
    address: "Khu đô thị FPT, Đà Nẵng, Việt Nam",
  },
};

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

export interface ArtisanStoryArticleBlock {
  title?: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  caption?: string;
}

export interface RelatedArtisanStory {
  name: string;
  subtitle: string;
  image: string;
  alt: string;
}

export interface ArtisanStoryDetailData {
  title: string;
  excerpt: string;
  author: string;
  blocks: ArtisanStoryArticleBlock[];
  relatedHeading: string;
  relatedStories: RelatedArtisanStory[];
}

export const mockArtisanStoryDetail: ArtisanStoryDetailData = {
  title: "Nghệ thuật làm gốm của người Chăm được UNESCO ghi danh",
  excerpt:
    "Tối 29/11/2022 (giờ Việt Nam), di sản Nghệ thuật làm gốm của người Chăm đã được UNESCO ghi danh vào Danh sách di sản văn hóa phi vật thể cần bảo vệ khẩn cấp.",
  author: "Bài và ảnh: HỒNG PHÚC",
  blocks: [
    {
      body: [
        "Thông tin từ Bộ Văn hóa, Thể thao và Du lịch cho biết, vào hồi 16 giờ 12 phút, ngày 29/11/2022 giờ địa phương (tức 22 giờ 12 phút ngày 29/11/2022 giờ Việt Nam), tại phiên họp của Ủy ban Liên chính phủ Công ước 2003 về bảo vệ di sản văn hóa phi vật thể lần thứ 17 của UNESCO diễn ra tại Rabat, thủ đô của Vương quốc Maroc, di sản Nghệ thuật làm gốm của người Chăm chính thức được UNESCO ghi danh vào Danh sách di sản văn hóa phi vật thể cần bảo vệ khẩn cấp.",
        "Đây là một trong 56 hồ sơ được xem xét trong kỳ họp này. Nghề làm gốm truyền thống của người Chăm có vai trò to lớn trong đời sống kinh tế, văn hóa, xã hội. Gốm là vật dụng không thể thiếu trong sinh hoạt hằng ngày của mỗi gia đình và trong văn hóa tín ngưỡng của cộng đồng người Chăm.",
      ],
      image: "/cauchuyen/Image164.png",
      imageAlt: "Nghệ nhân gốm Bàu Trúc tại Làng gốm Chăm Bàu Trúc",
      caption:
        "Nghệ nhân gốm Bàu Trúc tại Làng gốm Chăm Bàu Trúc, thị trấn Phước Dân, huyện Ninh Phước, tỉnh Ninh Thuận. Ảnh: Thanh Hà/TTXVN",
    },
    {
      title: "Cái tâm với nghề, vẹn tròn như một",
      body: [
        "Gốm Chăm hiện nay còn hiện diện chủ yếu ở hai làng là Ligok (Trì Đức, tỉnh Bình Thuận) và Hamu Crok (Bàu Trúc, tỉnh Ninh Thuận). Trong đó, tồn tại từ khoảng cuối thế kỷ 12 đến nay, Bàu Trúc được xem là một trong số rất ít những làng gốm cổ ở Đông Nam Á còn giữ lại cách sản xuất thô sơ từ ngàn xưa.",
        "Toàn bộ quy trình làm gốm của đồng bào Chăm toát lên một giá trị nghệ thuật đặc trưng. Chính nhờ vậy, dù trải qua bao thăng trầm trong tiến trình phát triển, gốm truyền thống của người Chăm vẫn tồn tại với thời gian, giữ được hồn cốt tinh túy và vẻ đẹp hoang sơ của gốm cổ cách đây hàng trăm năm.",
      ],
      image: "/cauchuyen/Image165.png",
      imageAlt: "Nghệ nhân yêu nghề truyền thống với đồ dân gian",
      caption:
        "Yêu nghề truyền thống, yêu trẻ em và yêu những món đồ dân gian ấy, nghệ nhân Nguyễn Thị Tuyến đã thổi vào mỗi chiếc đèn ông sao thần thái, cảm xúc, linh hồn thật tinh tế và sinh động.",
    },
    {
      title: "Nỗi lòng nghệ nhân “lấy công làm lãi”",
      body: [
        "Gốm không tráng men và được phơi khô, nung ở ngoài trời bằng củi và rơm trong 7 - 8 giờ ở nhiệt độ khoảng 800 độ C. Nguyên liệu (đất sét, cát, nước, củi và rơm) được khai thác tại chỗ. Đất sét được tái sinh theo chu kỳ vài ba năm sau khi khai thác tại các cánh đồng truyền thống của cộng đồng.",
        "Dụng cụ làm gốm đơn giản do nghệ nhân tận dụng vật liệu tại chỗ như vòng quơ, vòng cạo bằng tre để cạo mỏng thân gốm, vỏ sò và vải cuộn thấm nước để chà láng thân gốm.",
        "Tri thức và kỹ năng làm gốm được trao truyền cho các thế hệ trong gia đình thông qua thực hành. Việc làm nghề tạo cơ hội cho người phụ nữ Chăm giao lưu, tương tác trong lao động sản xuất, sinh hoạt xã hội, cũng như trong việc giáo dục nghề nghiệp cho con cái.",
      ],
      image: "/cauchuyen/Image166.png",
      imageAlt: "Đoàn Việt Nam tại kỳ họp UNESCO",
      caption:
        "Đoàn Việt Nam tại kỳ họp lần thứ 17 của Ủy ban liên chính phủ Công ước 2003 về bảo vệ di sản văn hóa phi vật thể.",
    },
    {
      body: [
        "Việc UNESCO ghi danh nghệ thuật làm gốm của người Chăm vào danh sách di sản văn hóa cần bảo vệ khẩn cấp một lần nữa khẳng định sự đánh giá cao của quốc tế đối với những giá trị văn hóa của người dân tỉnh Ninh Thuận và tỉnh Bình Thuận nói riêng và của người dân Việt Nam nói chung.",
        "Qua đó, góp phần giới thiệu đến bạn bè quốc tế về những di sản văn hóa đặc sắc của vùng đất duyên hải Nam Trung Bộ, giúp cộng đồng nhận thức đầy đủ hơn về giá trị của nghề làm gốm truyền thống của người Chăm trong kho tàng di sản văn hóa phi vật thể Việt Nam.",
        "Việc ghi danh sẽ thúc đẩy các biện pháp thiết thực nhằm bảo tồn, vực dậy sức sống của di sản, tạo thêm nguồn lực cho bảo tồn và phát huy giá trị di sản này, hỗ trợ phát triển kinh tế, văn hóa theo hướng bền vững, bao trùm ở các địa phương và cộng đồng dân cư.",
      ],
    },
  ],
  relatedHeading: "Xem thêm Câu chuyện nghệ nhân",
  relatedStories: [
    {
      name: "Trần Độ",
      subtitle: "“Vua men gốm”",
      image: "/cauchuyen/Rectangle29.png",
      alt: "Nghệ nhân Trần Độ",
    },
    {
      name: "Nguyễn Thị Hồng",
      subtitle: "Người giữ lửa cho làng gốm Phù Lãng Bắc Ninh",
      image: "/cauchuyen/Rectangle29(2).png",
      alt: "Nghệ nhân Nguyễn Thị Hồng",
    },
    {
      name: "Giàng Thị Páo",
      subtitle: "“Những bức tượng kể chuyện văn hoá người Chăm”",
      image: "/cauchuyen/Rectangle29(1).png",
      alt: "Nghệ nhân Giàng Thị Páo",
    },
    {
      name: "Phùng Bích Yên",
      subtitle: "Hướng đi mới cho làng nghề gốm Phù Lãng, Quế Võ, Bắc Ninh",
      image: "/cauchuyen/Rectangle29(3).png",
      alt: "Nghệ nhân Phùng Bích Yên",
    },
  ],
};

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
  { id: 0, img: "/Container.png", left: 0, top: 0, title: "Container 0", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 3, img: "/Container(2).png", left: 416, top: 0, title: "Container 3", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 1, img: "/Container(1).png", left: 832, top: 0, title: "Container 1", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 4, img: "/Container(4).png", left: 0, top: 415, title: "Container 4", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 5, img: "/Container(5).png", left: 416, top: 415, title: "Container 5", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 2, img: "/Container(2).png", left: 832, top: 415, title: "Container 2", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
];

export const mockCustomerInfoFAQs: FAQ[] = [
  {
    q: "Điền thông tin địa chỉ sau sáp nhập hay địa chỉ cũ",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut."
  },
  {
    q: "Tôi có thể thay đổi thông tin thanh toán sau khi đặt chỗ không?",
    a: "Sau khi đơn hàng đã hoàn tất thanh toán thành công, bạn không thể thay đổi thông tin thanh toán trực tiếp. Tuy nhiên, bạn có thể liên hệ với số Hotline hỗ trợ để được nhân viên hỗ trợ cập nhật thủ công thông tin hóa đơn đỏ VAT nếu cần."
  },
  {
    q: "Tôi có thể hủy workshop và nhận hoàn tiền không?",
    a: "Vé workshop di sản có thể được hỗ trợ hủy và hoàn tiền 100% khi yêu cầu được gửi trước giờ diễn ra workshop tối thiểu 48 tiếng. Các yêu cầu hủy muộn hơn sẽ không thể hoàn tiền nhưng có thể dời lịch sang buổi kế tiếp."
  },
  {
    q: "Có ưu đãi cho nhóm hoặc đặt nhiều vé không?",
    a: "DiSanity luôn có chính sách chiết khấu rất tốt từ 10% - 15% cho các đoàn khách đi nhóm từ 5 người trở lên, hoặc đặt combo từ 2 workshop di sản cùng lúc. Liên hệ hotline để nhận mã ưu đãi đoàn thể."
  },
  {
    q: "Thanh toán thất bại nhưng tiền đã trừ thì phải làm sao?",
    a: "Trường hợp tài khoản ngân hàng của bạn đã bị trừ tiền nhưng giao dịch hiển thị thất bại, vui lòng liên hệ Hotline 03324233282 ngay lập tức, cung cấp biên lai chuyển khoản ngân hàng (bill chuyển tiền) để hệ thống kích hoạt vé thủ công."
  },
  {
    q: "Tôi có thể xuất hóa đơn cho công ty không?",
    a: "Hoàn toàn có thể. Vui lòng ghi chú mã số thuế, tên công ty và địa chỉ doanh nghiệp chính xác tại khung 'Để lại lời nhắn...' để bộ phận kế toán của DiSanity hỗ trợ xuất hóa đơn điện tử e-VAT kịp thời."
  }
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

export type ScheduleEventStatus = "available" | "full" | "private" | "locked" | "holiday";

export interface ScheduleDay {
  weekday: string;
  date: string;
  isWeekend?: boolean;
}

export interface ScheduleEvent {
  id: number;
  dayIndex: number;
  startHour: number;
  durationHours: number;
  title: string;
  detail: string;
  status: ScheduleEventStatus;
  waitlist?: boolean;
  locked?: boolean;
  attendees?: string[];
}

export interface RecentScheduleBooking {
  name: string;
  detail: string;
  initials?: string;
  avatar?: string;
}

export interface ScheduleLegendItem {
  label: string;
  status: ScheduleEventStatus | "waitlist";
}

export interface ScheduleManagementData {
  weekLabel: string;
  times: string[];
  days: ScheduleDay[];
  events: ScheduleEvent[];
  bookedRate: number;
  recentBookings: RecentScheduleBooking[];
  acceptsPrivateBookings: boolean;
  legend: ScheduleLegendItem[];
}

export const mockScheduleManagement: ScheduleManagementData = {
  weekLabel: "Tuần này, 12 - 18 Tháng 5",
  times: ["08:00", "10:00", "12:00", "14:00", "16:00"],
  days: [
    { weekday: "T.Hai", date: "12" },
    { weekday: "T.Ba", date: "13" },
    { weekday: "T.Tư", date: "14" },
    { weekday: "T.Năm", date: "15" },
    { weekday: "T.Sáu", date: "16" },
    { weekday: "T.Bảy", date: "17" },
    { weekday: "C.Nhật", date: "18", isWeekend: true },
  ],
  events: [
    {
      id: 1,
      dayIndex: 0,
      startHour: 8.2,
      durationHours: 1.7,
      title: "Nhập môn làm gốm Thanh Hà",
      detail: "8/10 Slot",
      status: "available",
      waitlist: true,
    },
    {
      id: 2,
      dayIndex: 1,
      startHour: 8.2,
      durationHours: 2.6,
      title: "Trải nghiệm phối màu trên gốm",
      detail: "Đã hết chỗ",
      status: "full",
      locked: true,
      attendees: ["A", "B", "+8"],
    },
    {
      id: 3,
      dayIndex: 2,
      startHour: 8.55,
      durationHours: 1.5,
      title: "Chuẩn bị nguyên liệu",
      detail: "",
      status: "private",
    },
    {
      id: 4,
      dayIndex: 3,
      startHour: 8.2,
      durationHours: 1.5,
      title: "Khắc gốm",
      detail: "4/6 Slot",
      status: "available",
    },
    {
      id: 5,
      dayIndex: 3,
      startHour: 11.1,
      durationHours: 2.4,
      title: "Thử sức làm tò he từ đất nung",
      detail: "Đã hết chỗ",
      status: "full",
      locked: true,
      attendees: ["A", "B", "+8"],
    },
    {
      id: 6,
      dayIndex: 4,
      startHour: 8.0,
      durationHours: 1.1,
      title: "Đã Khóa",
      detail: "",
      status: "locked",
      locked: true,
    },
    {
      id: 7,
      dayIndex: 5,
      startHour: 8.0,
      durationHours: 1.7,
      title: "Trải nghiệm làm gốm đương đại",
      detail: "8/10 Slot",
      status: "available",
      waitlist: true,
    },
    {
      id: 8,
      dayIndex: 6,
      startHour: 9.1,
      durationHours: 2.6,
      title: "Nghỉ lễ hàng tuần",
      detail: "",
      status: "holiday",
    },
  ],
  bookedRate: 85,
  recentBookings: [
    {
      name: "Lê Minh",
      detail: "Thử sức làm tò he từ ddaasrt nung • 10:30",
      initials: "LM",
    },
    {
      name: "Trần Thanh Vân",
      detail: "Trải nghiệm làm gốm đương đại • 8:00",
      avatar: "/quanlilichtrinh/Rectangle4445.png",
    },
  ],
  acceptsPrivateBookings: true,
  legend: [
    { label: "Đang nhận khách", status: "available" },
    { label: "Đã kín lịch", status: "full" },
    { label: "Thời gian riêng / Chuẩn bị", status: "private" },
    { label: "Hàng chờ (Waitlist) đang mở", status: "waitlist" },
  ],
};
