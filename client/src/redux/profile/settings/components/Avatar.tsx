import React, { useRef, useState } from "react";

import { Avatar as Container, AvatarLabel } from "../Settings.styled";

const Avatar = () => {
  const [image, setImage] = useState("");
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (!selectedFile) return;

    const imgLink = URL.createObjectURL(selectedFile);
    setImage(imgLink);
  };

  const removeImage = () => {
    setImage("");

    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  return (
    <Container>
      <div>
        <AvatarLabel image={image}>
          <input
            name="file"
            type="file"
            accept="image/*"
            ref={imageInputRef}
            onChange={selectImage}
          />
          <p>Drag and drop image</p>
          <img src={image} alt="Avatar" />
        </AvatarLabel>
        <div>
          <button
            onClick={() =>
              imageInputRef.current && imageInputRef.current.click()
            }
          >
            Select new avatar
          </button>
          <p onClick={removeImage}>Remove</p>
        </div>
      </div>
      <p>Avatars must be JPEG or PNG format with maximum dimensions of Xpx.</p>
    </Container>
  );
};

export default Avatar;
