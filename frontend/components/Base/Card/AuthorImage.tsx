import Image from "next/image"
import { defaultAvatar } from "../../../utils/constants"
type AuthorImageProps = {
  image?: string
}

const AuthorImage = (props: AuthorImageProps) => {
  const { image } = props
  return (
    <div className="rounded-full w-11 h-11 overflow-hidden">
      {image && (
        <picture>
          <img
            src={image}
            alt=""
            style={{
              width: 44,
              height: 44,
              objectFit: "cover"
            }}
          />
        </picture>
      )}
      {!image && <Image src={defaultAvatar} alt="" />}
    </div>
  )
}

export default AuthorImage
