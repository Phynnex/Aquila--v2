import Logo from "assets/Logo2.png";

const ReportPdf = () => {
  return (
    <div className="m-10">
      <div className="flex justify-between mb-20">
        <div className="w-2/5">
          <img src={Logo} alt="logo" className="h-20" />
          <p className="text-left w-96">
            Aquila is an Intelligent and comprehensive end-to-end app security
            Solution.
          </p>
          <p className="text-left w-96">
            Developers can Scan, Monitor and protect their Mobile applications
            within Minutes.
          </p>
        </div>
        <p>www.aquila.com.ng</p>
      </div>
      <div className="">
        <p>Scan Date: 12/3/2023</p>
        <p className="font-bold text-3xl mb-6">
          Vulnerability Assessment_v1.1_apkpure.com.apk
        </p>
        <div className="w-96 flex  justify-between mb-10">
          <p>Platform : Android</p>
          <p>Version : 1.1</p>
          <p>Size: 13.4mb</p>
        </div>
      </div>
      <div>
        <p className="font-semibold">Vulnerabilities Scores</p>
        <div className="flex justify-between">
          <div className="border-solid border-2 border-red w-[30%] h-40 py-4 px-2">
            <div className="flex justify-between items-center text-sm mb-4">
              <p className="font-semibold">High-severity Vulnerabilities</p>
              <p className="text-2xl font-semibold text-red">3</p>
            </div>
            <p className="text-sm mb-2">
              This can lead to User data being leaked and to a serious Violation
              of the useris Privacy
            </p>
            <div class="mb-1 text-sm font-medium dark:text-white">20%</div>
            <div class="w-full bg-grey h-2.5 mb-4 dark:bg-grey">
              <div
                class="bg-red h-2.5  dark:bg-blue-500"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>

          <div className="border-solid border-2 border-yellow w-[30%] h-40 py-4 px-2">
            <div className="flex justify-between items-center text-sm mb-4">
              <p className="font-semibold">Meduim-severity Vulnerabilities</p>
              <p className="text-2xl font-semibold text-yellow">7</p>
            </div>
            <p className="text-sm mb-2">
              May affect app’s level of protection and reduce the level of
              security
            </p>
            <div class="mb-1 text-sm font-medium dark:text-white">38%</div>
            <div class="w-full bg-grey h-2.5 mb-4 dark:bg-grey">
              <div
                class="bg-yellow h-2.5  dark:bg-blue-500"
                style={{ width: "38%" }}
              ></div>
            </div>
          </div>

          <div className="border-solid border-2 border-green w-[30%] h-40 py-4 px-2">
            <div className="flex justify-between items-center text-sm mb-4">
              <p className="font-semibold">Low-severity Vulnerabilities</p>
              <p className="text-2xl font-semibold text-green">12</p>
            </div>
            <p className="text-sm mb-2">Violate best practices</p>
            <div class="mb-1 text-sm font-medium dark:text-white">52%</div>
            <div class="w-full bg-grey h-2.5 mb-4 dark:bg-grey">
              <div
                class="bg-green h-2.5  dark:bg-blue-500"
                style={{ width: "52%" }}
              ></div>
            </div>
          </div>
        </div>

        <p className="my-6 font-semibold text-lg">List of Vulnerabilities</p>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left border-2 ">
            <thead class="text-lg text-secondary border-b-2 font-semibold">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Severity
                </th>
                <th scope="col" class="px-6 py-3">
                  Analysis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  Ip Address Disclosure
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-red w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">High</p>
                  </div>
                </td>
                <td class="px-6 py-4">Manifest</td>
              </tr>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  Use of insecure HP protocol
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-red w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">High</p>
                  </div>
                </td>
                <td class="px-6 py-4">Binary</td>
              </tr>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  Enable Javascript
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-yellow w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">Medium</p>
                  </div>
                </td>
                <td class="px-6 py-4">Network</td>
              </tr>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  Content access is enabled for web view
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-yellow w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">Medium</p>
                  </div>
                </td>
                <td class="px-6 py-4">Network</td>
              </tr>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  Application backup is allowed
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-yellow w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">Medium</p>
                  </div>
                </td>
                <td class="px-6 py-4">Manifest</td>
              </tr>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap w-[80px]"
                >
                  App can red/write to external Storage. any app can read data
                  written to External Storage.
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-green w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">Low</p>
                  </div>
                </td>
                <td class="px-6 py-4">Network</td>
              </tr>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap w-[80px]"
                >
                 The app logs information. Sensitive information should never be 
logged in the console or what so ever.
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-green w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">Low</p>
                  </div>
                </td>
                <td class="px-6 py-4">Network</td>
              </tr>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap w-[80px]"
                >
                  Certificate pinning does not have an expiry  date
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-green w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">Low</p>
                  </div>
                </td>
                <td class="px-6 py-4">Network</td>
              </tr>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap w-[80px]"
                >
                  Domain config is securely configured to disallow clear text traffic
to these domain in scope.
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-green w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">Low</p>
                  </div>
                </td>
                <td class="px-6 py-4">Binary</td>
              </tr>
              <tr class="bg-white border-b-2 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap w-[80px]"
                >
                  Found 18 critical permission(s)
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-green w-4 h-4 rounded-full"></div>
                    <p className=" pl-6">Low</p>
                  </div>
                </td>
                <td class="px-6 py-4">Binary</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportPdf;
