import { useStateContext } from "Context/ContextProvider";
import ApkAccordion from "./../../components/Util_Components/ApkAccordion";
import PlayStoreModal from "./../../components/Modals/PlayStoreModal";

const APKReport = () => {
  const { scanFile, openModal, setOpenModal } = useStateContext();

  const handleSendEmail = () => {
    console.log('sendToEmail')
  }

  return (
    <>
     {openModal && <PlayStoreModal/>}
    <div className="">
      
      <div className="flex justify-between items-center">
        <p className="text-secondary font-semibold ">
          Vulnerability Scan Report:
        </p>
        <div className="w-1/3 flex justify-between items-center mr-14">
          <button className="py-2 px-4 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold">
            Download report
          </button>
          <button onClick={handleSendEmail} className="py-2 px-4 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold">
            Send report to mail
          </button>
        </div>
      </div>

      <div className="text-start shadow-lg shadow-secondary-500/500  w-[95%]  p-4 h-48 mr-14 mt-4 mb-10 rounded-md bg-neutral-50 border border-x-grey border-y-grey">
        <div className="flex justify-between pr-24">
          <div>
            <p className="text-secondary font-semibold">Application Name</p>
            <p className="text-secondary">{scanFile?.app_name}</p>
          </div>
          <div>
            <p className="text-secondary font-semibold">Package Version</p>
            <p className="text-secondary">{scanFile?.version_name}</p>
          </div>
          <div>
            <p className="text-secondary font-semibold">Medium severity test</p>
            <p className="text-secondary"></p>
          </div>
        </div>
        <div className="flex justify-between mt-6 pr-32">
          <div>
            <p className="text-secondary font-semibold">
              Total Scanned vulnerability
            </p>
            <p className="text-secondary"></p>
          </div>
          <div>
            <p className="text-secondary font-semibold ">
              Total vulnerability detected
            </p>
            <p className="text-secondary"></p>
          </div>
          <div>
            <p className="text-secondary font-semibold">Package Version</p>
            <p className="text-secondary"></p>
          </div>
        </div>
      </div>
     
      {scanFile?.playstore_details &&

        <div
        onClick={() => setOpenModal(true)}
        className="flex justify-end mr-14"
      >
        <button className="py-2 px-4 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold">
          Play Store
        </button>
      </div>
      }
      
      <ApkAccordion />
    </div>
    </>
  );
};

export default APKReport;
