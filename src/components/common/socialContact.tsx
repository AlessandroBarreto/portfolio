import { SocialData } from "../../data/social"
import "../../styles/socialContact.scss"

export default function SocialContact() {
    return (
        <div>
            this is social contact
            <img src={SocialData[0].icon} alt="" />
        </div>
    )
}
