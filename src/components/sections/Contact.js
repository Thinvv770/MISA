import React, { useState } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Contact = (props) => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const outerClasses = classNames(
    "news section reveal-from-top",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "news-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <>
      <section
        {...rest}
        className={outerClasses}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="container" style={{ margin: 0, padding: 0 }}>
          <div className={innerClasses}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                src={require("./../../assets/images/profilePic.png")}
                alt="profile"
                width={300}
                height={300}
              />
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "black",
                  }}
                >
                  Ms Diệu Thuỳ - Trưởng phòng Kinh doanh MISA - Phụ trách KV
                  Miền Trung
                </p>
                <p style={{ fontSize: "18px", color: "black" }}>
                  9+ năm kinh nghiệm triển khai Giải pháp Tài chính - Kế toán
                  cho hơn 2.500 Doanh nghiệp
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    src={require("./../../assets/images/message1.png")}
                    alt="message1"
                    width={250}
                    height={250}
                    onClick={() =>
                      openModal(require("./../../assets/images/message1.png"))
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src={require("./../../assets/images/message2.png")}
                    alt="message2"
                    width={250}
                    height={250}
                    onClick={() =>
                      openModal(require("./../../assets/images/message2.png"))
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src={require("./../../assets/images/message3.png")}
                    alt="message3"
                    width={250}
                    height={250}
                    onClick={() =>
                      openModal(require("./../../assets/images/message3.png"))
                    }
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "red",
                    marginBottom: 0,
                  }}
                >
                  Liên hệ EM THUỲ MISA 077 5533 213 để được tư vấn và hỗ trợ
                  nhiệt tình nhất ạ!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100v",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Preview"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </>
  );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
