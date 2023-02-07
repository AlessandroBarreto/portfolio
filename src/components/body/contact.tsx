import Separator from "../common/separator";
import SocialContact from "../common/socialContact";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "../../styles/contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Hey! Let's keep in touch.</p>
          <SocialContact />
        </div>
        <a
          className="download"
          href="alessandrobarreto.pdf"
          download="alessandro-barreto"
        >
          <FileDownloadOutlinedIcon />
          Download Resume
        </a>
      </div>
    </div>
  );
}
