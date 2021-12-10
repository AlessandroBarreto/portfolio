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
          <p>Want to get in touch? Contact me on any of the plataform</p>
          <SocialContact />
        </div>
        <a
          className="download"
          download
          href="../../assets/CV-AlessandroBarreto.pdf"
        >
          <FileDownloadOutlinedIcon />
          Download Resume
        </a>
      </div>
    </div>
  );
}
