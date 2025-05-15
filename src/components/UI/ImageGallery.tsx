// "use client";
import React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";

// LightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// LightGallery plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";

const ImageGallery = ({ images }) => {
  return (
    <div className="p-4">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {images?.map((imgUrl, idx) => (
          <Link key={idx} href={imgUrl} className="block">
            <Image
              src={imgUrl}
              alt={`Gallery Image ${idx + 1}`}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default ImageGallery;
