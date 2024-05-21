import React, { useRef, useState } from "react";

import { Avatar as Container } from "../Settings.styled";

const Avatar = () => {
  const [image, setImage] = useState("");
  const imageInputRef = useRef(null);

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (!selectedFile) return;

    const imgLink = URL.createObjectURL(selectedFile);
    setImage(imgLink);

    console.log(imgLink);
  };

  return (
    <Container>
      <div>
        <input
          name="file"
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={selectImage}
        />
        <div>
          <button>Select new avatar</button>
          <p>Remove</p>
        </div>
      </div>
      <p>Avatars must be JPEG or PNG format with maximum dimensions of Xpx.</p>
      {image && <img src={image} alt="Avatar" />}
    </Container>
  );
};

export default Avatar;
