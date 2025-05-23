import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import { isBrowser } from "react-device-detect";

const Information = (props) => {
  const zaloUrl = process.env.REACT_APP_ZALO_URL;
  const { topDivider, bottomDivider, invertMobile, invertDesktop, alignTop } =
    props;

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  return (
    <section>
      <div className="container reveal-from-top">
        <div className="hero-content split-item-content center-content-mobile ">
          <h4
            style={{
              fontWeight: "bold",
              color: "blue",
              marginTop: "80px",
              marginBottom: "20px",
            }}
          >
            Giải pháp kế toán 4.0 được tin dùng và phổ biến nhất tại Việt Nam
          </h4>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "40px",
              color: "red",
              marginTop: "20px",
              marginBottom: "10px",
              lineHeight: "normal",
            }}
          >
            Phần mềm kế toán online MISA AMIS
          </h3>
          <div className={innerClasses}>
            <div className={splitClasses}>
              <h4
                style={{
                  fontWeight: "bold",
                  color: "blue",
                  marginTop: "0px",
                  marginBottom: `${isBrowser ? "-40px" : "0px"}`,
                  opacity: "0.8",
                }}
              >
                TIÊN PHONG ỨNG DỤNG TRÍ TUỆ NHÂN TẠO AI
              </h4>
              <div className="split-item">
                <div>
                  <ul style={{ fontSize: "18px", color: "black" }}>
                    <li>AI thu thập & cảnh báo rủi ro HĐĐT</li>
                    <li>AI tạo chứng từ chỉ với 1 câu lệnh</li>
                    <li>AI tạo email đa ngôn ngữ nhanh X10 lần</li>
                    <li>AI cung cấp báo cáo tức thời trên mobile</li>
                  </ul>
                  {isBrowser ? (
                    <>
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
                        className="button button-error button-wide-mobile button-lg"
                        onClick={() => {
                          window.open(zaloUrl, "_blank");
                        }}
                      >
                        Mua ngay
                      </button>
                    </>
                  ) : (
                    <div style={{ display: "flex", marginBottom: "20px" }}>
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
                        className="button button-error button-wide-mobile button-lg"
                        onClick={() => {
                          window.open(zaloUrl, "_blank");
                        }}
                      >
                        Mua ngay
                      </button>
                    </div>
                  )}
                </div>
                <img
                  src={require("./../../assets/images/banner.png")}
                  alt="banner"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            paddingBottom: "40px",
          }}
        >
          <h4
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "blue",
              marginTop: !isBrowser ? 0 : undefined,
            }}
          >
            An toàn, Bảo mật đạt chuẩn Quốc tế
          </h4>
          <img
            src={require("./../../assets/images/certificate.png")}
            alt="certificate"
          />
        </div>
      </div>
    </section>
  );
};

Information.propTypes = {
  ...SectionSplitProps.types,
};

Information.defaultProps = {
  ...SectionSplitProps.defaults,
};

export default Information;
