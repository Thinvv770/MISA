import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Tabs, { TabList, Tab, TabPanel } from "../elements/Tabs";
import Image from "../elements/Image";
import Accordion from "../elements/Accordion";
import AccordionItem from "../elements/AccordionItem";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const allTabs = [
  {
    tabId: "tab-a",
    title: "AMIS kế toán",
    subTitle: "Phần mềm AMIS kế toán online",
    iconSrc: require("./../../assets/images/amisLogo.png"),
    items: [
      {
        title: "Làm việc mọi lúc mọi nơi, trên mọi thiết bị",
        content:
          "Không cần cài đặt, không phụ thuộc kết nối máy chủ, máy trạm.\n Dữ liệu lưu trữ trên nền tảng đám mây, an toàn – bảo mật, không sợ hư hỏng - mất dữ liệu khi gặp sự cố máy tính",
        active: false,
      },
      {
        title: "Đáp ứng đầy đủ nghiệp vụ cho mọi lĩnh vực, ngành nghề",
        content:
          "Đầy đủ 20 nghiệp vụ kế toán theo Thông Tư 133 & Thông Tư 200, từ Quỹ, Ngân hàng, Mua hàng, Bán hàng, Kho, Hóa đơn, Thuế, Giá thành,...\n Đáp ứng 30+ ngành nghề, tất cả các lĩnh vực từ Thương mại, Dịch vụ, Sản xuất, Xây lắp.",
        active: false,
      },
      {
        title: "Ứng dụng Al – Tự động hóa tối đa nghiệp vụ kế toán",
        content:
          "Tích hợp hóa đơn đầu vào, hóa đơn đầu ra, ngân hàng giúp tự động hạch toán chứng từ phát sinh, giảm thiểu 80% tác vụ thủ công.\n Cảnh báo thông minh: Nhắc nhở hạn kê khai, nộp thuế; cảnh báo tồn kho, các khoản công nợ đến hạn,...\n Quy trình phê duyệt tiện lợi: Xây dựng quy trình đề xuất, phê duyệt tạm ứng tự động ngay trên phần mềm.\n Tự động tổng hợp số liệu lên báo cáo thuế, tờ khai thuế, báo cáo tài chính giúp doanh nghiệp nộp báo cáo kịp thời, chính xác theo mẫu chuẩn của BTC.\n Tự động kiểm tra, phát hiện sai lệch và đưa ra cảnh báo cho khách hàng giúp giảm thiểu rủi ro, tránh bị thuế phạt",
        active: false,
      },
    ],
  },
  {
    tabId: "tab-b",
    title: "Hoá đơn MeInvoice",
    subTitle: "Phần mềm Hoá đơn điện tử MISA MeInvoice",
    iconSrc: require("./../../assets/images/meinvoiceIcon.png"),
    items: [
      {
        title:
          "Đáp ứng đầy đủ mọi hình thức hóa đơn theo quy định của Cơ quan thuế",
        content:
          "Hóa đơn GTGT.\n Hóa đơn bán hàng.\n Hóa đơn bán lẻ xăng dầu.\n Hóa đơn khởi tạo từ máy tính tiền.\n Tem, vé, biên lai điện tử.\n Phiếu xuất kho kiêm vận chuyển nội bộ",
        active: false,
      },
      {
        title: "Kết nối nhiều ứng dụng giúp đồng bộ dữ liệu nhanh chóng",
        content:
          "Kết nối phần mềm AMIS Kế toán, MISA SME 2023, MISA SME 2022...\n Kết nối phần mềm bán hàng: CUKCUK, Eshop, Ipos, Kioviet, EZCloud...\n Kết nối phần mềm xăng dầu: IGAS, EGAS, Nam Dương, SMARTGAS, PETROCLOUD, SGAS, SEEN, PETRONET - PECO, SENPOS GAS,...\n Kết nối API với các phần mềm quản trị nội bộ của Doanh nghiệp.\n Dễ dàng tích hợp chữ ký số, chứng từ thuế điện tử, hợp đồng điện tử",
        active: false,
      },
    ],
  },
  {
    tabId: "tab-c",
    title: "MeInvoice Inbot",
    subTitle: "Dịch vụ xử lý Hoá đơn đầu vào MISA MeInvoice Inbot",
    iconSrc: require("./../../assets/images/meinvoiceIcon.png"),
    items: [
      {
        title: "Giảm thiểu sai sót, thất lạc hóa đơn, rủi ro về thuế",
        content:
          "Kết nối với trang hóa đơn điện tử của thuế, tự động đồng bộ tất cả các loại hóa đơn: Hóa đơn có mã, Hóa đơn không có mã, Hóa đơn khởi tạo từ MTT,...\n Tự động phân tích, kiểm tra thông tin hóa đơn, trạng thái hoạt động của người bán, cảnh báo NCC mua bán hóa đơn theo DS thuế công bố... đảm bảo tính hợp pháp, hợp lệ của hóa đơn.\n Cập nhật trạng thái và ngày thay đổi trạng thái hóa đơn: Hủy, thay thế, điều chỉnh...\n Tự động đồng bộ dữ liệu hóa đơn với phần mềm kế toán, tiết kiệm thời gian nhập liệu thủ công, hạn chế rủi ro hạch toán thiếu - trùng hóa đơn tránh bị thuế phạt",
        active: false,
      },
    ],
  },
  {
    tabId: "tab-d",
    title: "MISA Esign",
    subTitle: "Chữ ký số từ xa MISA Esign (Không cần USB)",
    iconSrc: require("./../../assets/images/misaEsign.png"),
    items: [
      {
        title: "Phù hợp triển khai cho mọi đối tượng",
        content:
          "Tổ chức: Chữ ký số có giá trị pháp lý như con dấu của tổ chức khi giao dịch điện tử: Xuất hóa đơn; Ký hợp đồng; Xác nhận sao kê, thanh toán; Kê khai BHXH, thuế điện tử...\n Cá nhân thuộc tổ chức: Chữ ký số có giá trị pháp lý như chữ ký tay của cá nhân trong tổ chức, ký các giao dịch điện tử trong nội bộ hoặc bên ngoài được Tổ chức ủy quyền: Ký hợp đồng; Thanh toán...\n Cá nhân: Chữ ký số có giá trị pháp lý như chữ ký tay nhằm thực hiện các giao dịch điện tử: Ký hợp đồng; Thanh toán điện tử, Kê khai thuế TNCN...",
        active: false,
      },
      {
        title: "Ký số thuận tiện, nhanh chóng ngay trên điện thoại",
        content:
          "Đáp ứng đầy đủ nghiệp vụ ký kết: Phát hành hóa đơn điện tử, Kê khai/quyết toán thuế, bảo hiểm, Ký văn bản, hợp đồng điện tử, Giao dịch ngân hàng, Chứng khoán điện tử, Xác thực dịch vụ công điện tử.\n Ký số mọi lúc, mọi nơi ngay trên điện thoại di động, tablet, máy tính mà không cần USB Token",
        active: false,
      },
      {
        title: "Bảo mật thông tin, an toàn tuyệt đối",
        content:
          "Được bộ TT&TT cấp phép, đạt tiêu chuẩn Châu Âu elDAS.\n Đáp ứng đầy đủ quy định pháp luật theo nghị định 130/2018/NĐ-CP và thông tư 16/2019/TT-BTTTT của Bộ TT&TT",
        active: false,
      },
    ],
  },
  {
    tabId: "tab-e",
    title: "Ngân hàng điện tử",
    subTitle: "Ngân hàng điện tử",
    iconSrc: require("./../../assets/images/eBank.png"),
    items: [
      {
        title: "Kết nối với các Ngân hàng phổ biến",
        content:
          "Đáp ứng đầy đủ nghiệp vụ ký kết: Phát hành hóa đơn điện tử, Kê khai/quyết toán thuế, bảo hiểm, Ký văn bản, hợp đồng điện tử, Giao dịch ngân hàng, Chứng khoán điện tử, Xác thực dịch vụ công điện tử.\n Ký số mọi lúc, mọi nơi ngay trên điện thoại di động, tablet, máy tính mà không cần USB Token",
        active: false,
        imageSrc: require("./../../assets/images/bankLogo.png"),
      },
      {
        title: "Nâng cao hiệu suất nghiệp vụ Ngân hàng",
        content:
          "Cho phép kế toán lập lệnh chuyển tiền ngay trên phần mềm kế toán kết nối với hệ thống internet banking của ngân hàng để thực hiện phê duyệt.\n Dễ dàng tra cứu số dư tài khoản và lịch sử giao dịch ngay trên phần mềm kế toán giúp quản lý dòng tiền hiệu quả.\n Đối chiếu số dư và các giao dịch đã phát sinh trong ngày/tuần/tháng và các chứng từ trên số kế toán tiền gửi. Hệ thống tự động phát hiện sai lệch và gợi ý điều chỉnh phù hợp.\n Tự động hạch toán chứng từ thu tiền gửi ngay sau khi có biến động giao dịch giúp tiết kiệm thời gian và tăng năng suất, hiệu quả công việc.\n Kết nối website bán hàng, phần mềm quản trị với tài khoản ngân hàng của doanh nghiệp giúp tự động xác nhận thanh toán, sinh chứng từ bán hàng/dịch vụ và hóa đơn.",
        active: false,
      },
      {
        title: "An toàn, bảo mật tuyệt đối",
        content:
          "Giải pháp được cấp phép bởi Ngân hàng Nhà nước. Áp dụng cơ chế xác thực 02 lần (2FA) để xác minh cho các giao dịch tài chính.",
        active: false,
      },
    ],
  },
  {
    tabId: "tab-f",
    title: "AMIS WESIGN",
    subTitle: "Tài liệu điện tử, hợp đồng điện tử AMIS WESIGN",
    iconSrc: require("./../../assets/images/misaWesign.png"),
    items: [
      {
        title: "Tối ưu chi phí, thời gian và nguồn lực",
        content:
          "Tiết kiệm 100% chi phí in ấn, chuyển phát, lưu trữ.\n Tự động toàn bộ quy trình ký, giảm công sức của nhân viên.\n Ký trên mọi thiết bị: máy tính, điện thoại, máy tính bảng... mà không cần phải luôn có mặt tại công ty hay ngồi tại máy tính.\n Ký nhiều tài liệu cùng một lúc, không cần phải ký đơn lẻ nhiều lần.\n Quản lý tài liệu tập trung, tránh thất thoát, hư hỏng, dễ dàng tra cứu lịch sử ký kết, phân loại tài liệu,\n Kết nối với các ứng dụng lưu trữ online (GoogleDrive, OneDrive, Dropbox,...) để tải và ký tài liệu ở mọi định dạng khác nhau",
        active: false,
      },
      {
        title: "Nền tảng thông minh - Kết nối linh hoạt với các hệ thống",
        content:
          "Tương thích với các chữ ký số bằng USB Token, HSM, Remote Signing,\n Tích hợp với phần mềm CRM, HRM, Kế toán và các ứng dụng Điều hành thuộc hệ sinh thái của MISA AMIS để tạo luồng ký thuận tiện hơn",
        active: false,
        imageSrc: require("./../../assets/images/digitalSign.png"),
      },
      {
        title: "Tối ưu an toàn, an ninh thông tin",
        content:
          "Đáp ứng đầy đủ tính pháp lý về xác thực điện tử.\n Giải pháp bảo mật chống tấn công từ bên ngoài 24/7.\n Hợp đồng, tài liệu điện tử được lưu trữ tại Trung tâm dữ liệu đạt chuẩn quốc tế Tier 3 - Chuẩn cao nhất hiện nay.\n Phần mềm xây dựng theo quy trình chuẩn quốc tế về quản lý chất lượng, bảo mật thông tin ISO 9001:2015, ISO 2700:2013, CSA Star Certificate và CMMI3.\n Hệ thống áp dụng nhiều giải pháp bảo mật nhiều tầng, nhiều lớp: Firewall, Web-App Firewall, IPS System, 2FA Authentication, Antivirus, Pentest, Multi-tenancy.\n Mã hóa kênh đường truyền, mã hóa dữ liệu",
        active: false,
      },
    ],
  },
  {
    tabId: "tab-g",
    title: "AMIS Thuế TNCN",
    subTitle: "Chứng từ khấu trừ thuế - AMIS Thuế TNCN",
    iconSrc: require("./../../assets/images/misaTax.png"),
    items: [
      {
        title: "Điện tử hóa hoàn toàn thủ tục Thuế TNCN",
        content:
          "Đăng ký MST cá nhân.\n Đăng ký người phụ thuộc.\n Lập chứng từ khấu trừ thuế TNCN điện tử.\n Quyết toán Thuế TNCN hàng năm.\n Kê khai thuế TNCN hàng tháng/ quý/ lần phát sinh",
        active: false,
      },
      {
        title: "Thực hiện thủ tục Thuế TNCN nhanh chóng, dễ dàng",
        content:
          "Đảm bảo 100% quy định của pháp luật.\n Luôn cập nhật các mẫu tờ khai thuế theo chính sách mới nhất từ cơ quan Thuế.\n Tức thời tra cứu tiến độ xử lý.\n Tức thời theo dõi toàn bộ báo cáo",
        active: false,
      },
    ],
  },
];

const FeaturesTabs = (props) => {
  const zaloUrl = process.env.REACT_APP_ZALO_URL;
  const [currentTab, setCurrentTab] = useState("tab-a");
  const {
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...rest
  } = props;

  const outerClasses = classNames(
    "features-tabs section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tabs-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...rest} className={outerClasses}>
      <div className="container reveal-from-top">
        <div className={innerClasses}>
          <h3
            style={{
              fontWeight: "bold",
              color: "red",
              marginTop: "0px",
              marginBottom: "10px",
            }}
          >
            GIẢI PHÁP QUẢN TRỊ TOÀN DIỆN CHO DOANH NGHIỆP
          </h3>
          <Tabs active={currentTab} onChange={setCurrentTab}>
            <TabList style={{ marginTop: "10px" }}>
              {allTabs.map((tab) => {
                return (
                  <Tab
                    tabId={tab.tabId}
                    key={tab.tabId}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="features-tabs-tab-image mb-12">
                      <Image
                        src={tab.iconSrc}
                        alt="Tab icon 01"
                        width={56}
                        height={56}
                      />
                    </div>
                    <div
                      className="text-color-high fw-600 text-sm"
                      style={{ textAlign: "left", fontSize: "16px" }}
                    >
                      {tab.title}
                    </div>
                  </Tab>
                );
              })}
            </TabList>
            {allTabs.map((tab) => {
              return (
                <TabPanel id={tab.tabId} key={tab.tabId}>
                  <div>
                    <h4
                      style={{
                        color: "#002253",
                        marginTop: "0px",
                        marginBottom: "10px",
                        textAlign: "left",
                      }}
                    >
                      {tab.subTitle}
                    </h4>
                    <div className="container-xs">
                      <Accordion>
                        {tab.items.map((item, index) => {
                          return (
                            <AccordionItem
                              key={index}
                              title={item.title}
                              active={item.active}
                              triggerKey={currentTab}
                              imageSrc={item.imageSrc ?? ""}
                            >
                              {item.content.split("\n").map((line, i) => (
                                <p key={i}>{line}</p>
                              ))}
                            </AccordionItem>
                          );
                        })}
                      </Accordion>
                    </div>
                  </div>
                </TabPanel>
              );
            })}
          </Tabs>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button
              type="button"
              className="button button-success button-wide-mobile button-lg mr-16"
              onClick={() => {
                window.open(zaloUrl, "_blank");
              }}
            >
              Nhận tư vấn
            </button>
            <button
              type="button"
              className="button button-warning button-wide-mobile button-lg"
              onClick={() => {
                window.open(zaloUrl, "_blank");
              }}
            >
              Bảng giá
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTabs.propTypes = propTypes;
FeaturesTabs.defaultProps = defaultProps;

export default FeaturesTabs;
