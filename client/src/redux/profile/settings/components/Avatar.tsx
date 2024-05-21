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
  };

  return (
    <Container>
      <div>
        <label>
          <input
            name="file"
            type="file"
            accept="image/*"
            ref={imageInputRef}
            onChange={selectImage}
          />
          {!image && <p>Drag and Drop image</p>}
          {image && <img src={image} alt="Avatar" />}
        </label>
        <div>
          <button>Select new avatar</button>
          <p>Remove</p>
        </div>
      </div>
      <p>Avatars must be JPEG or PNG format with maximum dimensions of Xpx.</p>
    </Container>
  );
};

export default Avatar;
