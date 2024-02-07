import { useState } from "react";
const PlacesGallery = ({ place }) => {
  const [showAllphotos, setShowAllPhotos] = useState(false);

  if (showAllphotos) {
    return (
      <div className="absolute inset-0 bg-black text-white  min-h-screen ">
        <div className="bg-black p-8 grid gap-4">
          <div className="flex">
            <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Close photos
            </button>
          </div>
          <div className="grid grid-cols-6 ">
            {place?.photos?.length > 0 &&
              place.photos.map((photo) => (
                <div className="col-start-2 col-span-4" key={photo}>
                  <img
                    className="w-full rounded-3xl "
                    src={"http://127.0.0.1:4000/uploads/" + photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
      <div>
        {place.photos?.[0] && (
          <div>
            <img
              onClick={() => setShowAllPhotos(true)}
              className="w-full cursor-pointer object-cover"
              src={"http://127.0.0.1:4000/uploads/" + place.photos[0]}
              // src={"http://localhost:4000/uploads/" + place.photos[0]}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="grid">
        {place.photos?.[0] && (
          <img
            onClick={() => setShowAllPhotos(true)}
            className="w-full cursor-pointer object-cover"
            src={"http://127.0.0.1:4000/uploads/" + place.photos[0]}
            // src={"http://localhost:4000/uploads/" + place.photos[0]}
            alt=""
          />
        )}
        <div className="overflow-hidden">
          {place.photos?.[0] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="w-full cursor-pointer object-cover relative top-2"
              src={"http://127.0.0.1:4000/uploads/" + place.photos[0]}
              // src={"http://localhost:4000/uploads/" + place.photos[0]}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlacesGallery;
