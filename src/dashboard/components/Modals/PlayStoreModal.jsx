import { useStateContext } from "../../../Context/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";

const PlayStoreModal = () => {
  const { setOpenModal, scanFile } = useStateContext();

  return (
    <div class="bg-secondary shadow-lg shadow-neutral-500/50 h-full absolute  w-full flex justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-50 z-99 ">
      <div class=" bg-white w-[600px] h-[450px] relative pt-4  overflow-auto ">
        <button
          onClick={() => setOpenModal(false)}
          class="absolute right-4 top-4"
        >
          <MdOutlineCancel />
        </button>
        <div class="flex flex-col pl-20 leading-9">
          <p className="text-2xl"><b>Play Store Details</b></p>

          <p>
            <b>App Id : </b>
            {scanFile?.playstore_details?.appId || "N/A"}
          </p>

          <p>
            <b>Content Rating : </b>
            {scanFile?.playstore_details?.contentRating || "N/A"}
          </p>
          <p>
            <b>Currency : </b>
            {scanFile?.playstore_details?.currency || "N/A"}
          </p>
          <p>
            <b>Developer : </b>
            {scanFile?.playstore_details?.developer || "N/A"}
          </p>

          <p>
            <b>Developer Address: </b>
            {scanFile?.playstore_details?.developerAddress || "N/A"}
          </p>

          <p>
            <b>Developer Email: </b>
            {scanFile?.playstore_details?.developerEmail || "N/A"}
          </p>

          <p>
            <b>Developer ID: </b>
            {scanFile?.playstore_details?.developerId || "N/A"}
          </p>

          <p>
            <b>Developer Website: </b>
            {scanFile?.playstore_details?.developerWebsite || "N/A"}
          </p>

          <p>
            <b>Description : </b>
            {scanFile?.playstore_details?.description || "N/A"}
          </p>

          <p>
            <b>Genre: </b>
            {scanFile?.playstore_details?.genre || "N/A"}
          </p>

          <p>
            <b>Installations: </b>
            {scanFile?.playstore_details?.installs || "N/A"}
          </p>

          <p>
            <b>Price: </b>
            {scanFile?.playstore_details?.price || "N/A"}
          </p>

          <p>
            <b>Ratings : </b>
            {scanFile?.playstore_details?.ratings || "N/A"}
          </p>

          <p>
            <b>Real Installations: </b>
            {scanFile?.playstore_details?.realInstalls || "N/A"}
          </p>

          <p>
            <b>Released Date: </b>
            {scanFile?.playstore_details?.released || "N/A"}
          </p>

          <p>
            <b>Reviews: </b>
            {scanFile?.playstore_details?.reviews || "N/A"}
          </p>
          <p>
            <b>Summary: </b>
            {scanFile?.playstore_details?.summary || "N/A"}
          </p>
          <p>
            <b>Title : </b>
            {scanFile?.playstore_details.title || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayStoreModal;
