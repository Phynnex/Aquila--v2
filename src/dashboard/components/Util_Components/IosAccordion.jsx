import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  
} from "@material-tailwind/react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { useStateContext } from "Context/ContextProvider";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    color: "#757575",
    borderBottom: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function IosAccordion() {
  const [open, setOpen] = useState(0);
  const { scanFile } = useStateContext();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" shadow-lg shadow-secondary-500/500  w-[95%]  p-4 h-auto mr-14 mt-4 rounded-md bg-neutral-50 border border-x-grey border-y-grey">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Binary Analysis
        </AccordionHeader>
        <AccordionBody>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>MASVS</StyledTableCell>
                  <StyledTableCell align="center">CVSS</StyledTableCell>
                  <StyledTableCell align="center">SEVERITY</StyledTableCell>
                  {/* <StyledTableCell align="center">STATUS</StyledTableCell> */}
                  <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {
                      scanFile?.binary_analysis[
                        "Binary makes use of Logging function"
                      ].masvs || "N/A"
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {
                      scanFile?.binary_analysis[
                        "Binary makes use of Logging function"
                      ].cvss || "N/A"
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      className="py-2 px-8 rounded-md text-white"
                      style={{
                        backgroundColor:
                          (scanFile?.binary_analysis[
                            "Binary makes use of Logging function"
                          ].severity === "info" &&
                            "#3DDB84") ||
                          (scanFile?.binary_analysis[
                            "Binary makes use of Logging function"
                          ].severity === "high" &&
                            "#FE1102") ||
                          (scanFile?.binary_analysis[
                            "Binary makes use of Logging function"
                          ].severity === "warning" &&
                            "#FAB626"),
                      }}
                    >
                      {
                        scanFile?.binary_analysis[
                          "Binary makes use of Logging function"
                        ].severity || "N/A"
                      }
                    </button>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {
                      scanFile?.binary_analysis[
                        "Binary makes use of insecure API(s)"
                      ].masvs || "N/A"
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {
                      scanFile?.binary_analysis[
                        "Binary makes use of insecure API(s)"
                      ].cvss || "N/A"
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      className="py-2 px-8 rounded-md text-white"
                      style={{
                        backgroundColor:
                          (scanFile?.binary_analysis[
                            "Binary makes use of insecure API(s)"
                          ].severity === "info" &&
                            "#3DDB84") ||
                          (scanFile?.binary_analysis[
                            "Binary makes use of insecure API(s)"
                          ].severity === "high" &&
                            "#FE1102") ||
                          (scanFile?.binary_analysis[
                            "Binary makes use of insecure API(s)"
                          ].severity === "warning" &&
                            "#FAB626"),
                      }}
                    >
                      {
                        scanFile?.binary_analysis[
                          "Binary makes use of insecure API(s)"
                        ].severity || "N/A"
                      }
                    </button>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                  {
                      scanFile?.binary_analysis[
                        "Binary makes use of malloc function"
                      ].masvs || "N/A"
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  {
                      scanFile?.binary_analysis[
                        "Binary makes use of malloc function"
                      ].cvss || "N/A"
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <button
                      className="py-2 px-8 rounded-md text-white"
                      style={{
                        backgroundColor:
                          (scanFile?.binary_analysis[
                            "Binary makes use of malloc function"
                          ].severity === "info" &&
                            "#3DDB84") ||
                          (scanFile?.binary_analysis[
                            "Binary makes use of malloc function"
                          ].severity === "high" &&
                            "#FE1102") ||
                          (scanFile?.binary_analysis[
                            "Binary makes use of malloc function"
                          ].severity === "warning" &&
                            "#FAB626"),
                      }}
                    >
                      {
                        scanFile?.binary_analysis[
                          "Binary makes use of malloc function"
                        ].severity || "N/A"
                      }
                    </button>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Marcho Analysis
        </AccordionHeader>
        <AccordionBody>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>DESCRIPTION</StyledTableCell>
                  <StyledTableCell align="center">SEVERITY</StyledTableCell>                 
                  <StyledTableCell align="center">DETAILS</StyledTableCell>                 
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <p className="font-semibold text-2xl">arc</p>
                  {scanFile?.macho_analysis?.arc?.description}
                   
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (scanFile?.macho_analysis?.arc?.severity === "info" && "#3DDB84") ||
                              (scanFile?.macho_analysis?.arc?.severity === "high" && "#FE1102") ||
                              (scanFile?.macho_analysis?.arc?.severity === "warning" && "#FAB626") ||
                              (scanFile?.macho_analysis?.arc?.severity === "secure" && "#0096FF"),
                          }}
                        >
                          {scanFile?.macho_analysis?.arc?.severity || "N/A"}
                        </div>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>
                
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <p className="font-semibold text-2xl">Code Signature</p>
                  {scanFile?.macho_analysis?.code_signature?.description}
                   
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (scanFile?.macho_analysis?.code_signature?.severity === "info" && "#3DDB84") ||
                              (scanFile?.macho_analysis?.code_signature?.severity === "high" && "#FE1102") ||
                              (scanFile?.macho_analysis?.code_signature?.severity === "warning" && "#FAB626") ||
                              (scanFile?.macho_analysis?.code_signature?.severity === "secure" && "#0096FF"),
                          }}
                        >
                          {scanFile?.macho_analysis?.code_signature?.severity || "N/A"}
                        </div>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>
                
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <p className="font-semibold text-2xl">encrypted</p>
                  {scanFile?.macho_analysis?.encrypted?.description}
                   
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (scanFile?.macho_analysis?.encrypted?.severity === "info" && "#3DDB84") ||
                              (scanFile?.macho_analysis?.encrypted?.severity === "high" && "#FE1102") ||
                              (scanFile?.macho_analysis?.encrypted?.severity === "warning" && "#FAB626") ||
                              (scanFile?.macho_analysis?.encrypted?.severity === "secure" && "#0096FF"),
                          }}
                        >
                          {scanFile?.macho_analysis?.encrypted?.severity || "N/A"}
                        </div>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <p className="font-semibold text-2xl">nx</p>
                  {scanFile?.macho_analysis?.nx?.description}
                   
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (scanFile?.macho_analysis?.nx?.severity === "info" && "#3DDB84") ||
                              (scanFile?.macho_analysis?.nx?.severity === "high" && "#FE1102") ||
                              (scanFile?.macho_analysis?.nx?.severity === "warning" && "#FAB626") ||
                              (scanFile?.macho_analysis?.nx?.severity === "secure" && "#0096FF"),
                          }}
                        >
                          {scanFile?.macho_analysis?.nx?.severity || "N/A"}
                        </div>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <p className="font-semibold text-2xl">pie</p>
                  {scanFile?.macho_analysis?.pie?.description}
                   
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (scanFile?.macho_analysis?.pie?.severity === "info" && "#3DDB84") ||
                              (scanFile?.macho_analysis?.pie?.severity === "high" && "#FE1102") ||
                              (scanFile?.macho_analysis?.pie?.severity === "warning" && "#FAB626") ||
                              (scanFile?.macho_analysis?.pie?.severity === "secure" && "#0096FF"),
                          }}
                        >
                          {scanFile?.macho_analysis?.pie?.severity || "N/A"}
                        </div>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <p className="font-semibold text-2xl">rpath</p>
                  {scanFile?.macho_analysis?.rpath?.description}
                   
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (scanFile?.macho_analysis?.rpath?.severity === "info" && "#3DDB84") ||
                              (scanFile?.macho_analysis?.rpath?.severity === "high" && "#FE1102") ||
                              (scanFile?.macho_analysis?.rpath?.severity === "warning" && "#FAB626") ||
                              (scanFile?.macho_analysis?.rpath?.severity === "secure" && "#0096FF"),
                          }}
                        >
                          {scanFile?.macho_analysis?.rpath?.severity || "N/A"}
                        </div>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <p className="font-semibold text-2xl">stack_canary
</p>
                  {scanFile?.macho_analysis?.stack_canary
?.description}
                   
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (scanFile?.macho_analysis?.stack_canary
?.severity === "info" && "#3DDB84") ||
                              (scanFile?.macho_analysis?.stack_canary
?.severity === "high" && "#FE1102") ||
                              (scanFile?.macho_analysis?.stack_canary
?.severity === "warning" && "#FAB626") ||
                              (scanFile?.macho_analysis?.stack_canary
?.severity === "secure" && "#0096FF"),
                          }}
                        >
                          {scanFile?.macho_analysis?.arc?.severity || "N/A"}
                        </div>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <p className="font-semibold text-2xl">symbol</p>
                  {scanFile?.macho_analysis?.symbol?.description}
                   
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (scanFile?.macho_analysis?.symbol?.severity === "info" && "#3DDB84") ||
                              (scanFile?.macho_analysis?.symbol?.severity === "high" && "#FE1102") ||
                              (scanFile?.macho_analysis?.symbol?.severity === "warning" && "#FAB626") ||
                              (scanFile?.macho_analysis?.symbol?.severity === "secure" && "#0096FF"),
                          }}
                        >
                          {scanFile?.macho_analysis?.arc?.severity || "N/A"}
                        </div>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionBody>
      </Accordion>
      
    </div>
  );
}
