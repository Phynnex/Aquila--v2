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
    color: "#757575",
    fontSize: 16,
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

export default function ApkAccordion() {
  const [open, setOpen] = useState(0);
  const { scanFile } = useStateContext();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" shadow-lg shadow-secondary-500/500  w-[95%]  p-4 h-auto mr-14 mt-4 rounded-md bg-neutral-50 border border-x-grey border-y-grey">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Certificate Analysis
        </AccordionHeader>

        
          <AccordionBody>
          {scanFile?.certificate_analysis ? (
            <TableContainer>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>DESCRIPTION</StyledTableCell>
                    <StyledTableCell align="center">SEVERITY</StyledTableCell>
                    <StyledTableCell align="center">
                      VIEW DETAILS
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {
                        scanFile?.certificate_analysis
                          .certificate_findings[0][1] 
                      }
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <button
                        className="py-2 px-8 rounded-md text-white"
                        style={{
                          backgroundColor:
                            (scanFile?.certificate_analysis
                              .certificate_findings[0][0] === "info" &&
                              "#3DDB84") ||
                            (scanFile?.certificate_analysis
                              .certificate_findings[0][0] === "high" &&
                              "#FE1102") ||
                            (scanFile?.certificate_analysis
                              .certificate_findings[0][0] === "warning" &&
                              "#FAB626") ||
                            (scanFile?.certificate_analysis
                              .certificate_findings[0][0] === "secure" &&
                              "#3DDB84"),
                        }}
                      >
                        {
                          scanFile?.certificate_analysis
                            .certificate_findings[0][0]
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
                        scanFile?.certificate_analysis
                          .certificate_findings[1][1]
                      }
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <div
                        className="py-2 px-8 rounded-md text-white"
                        style={{
                          backgroundColor:
                            (scanFile?.certificate_analysis
                              .certificate_findings[1][0] === "info" &&
                              "#3DDB84") ||
                            (scanFile?.certificate_analysis
                              .certificate_findings[1][0] === "high" &&
                              "#FE1102") ||
                            (scanFile?.certificate_analysis
                              .certificate_findings[1][0] === "warning" &&
                              "#FAB626") ||
                            (scanFile?.certificate_analysis
                              .certificate_findings[1][0] === "secure" &&
                              "#3DDB84"),
                        }}
                      >
                        {
                          scanFile?.certificate_analysis
                            .certificate_findings[1][0]
                        }
                      </div>
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <Link to="">View Details</Link>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {
                        scanFile?.certificate_analysis
                          .certificate_findings[2][1]
                      }
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <div
                        className="py-2 px-8 rounded-md text-white"
                        style={{
                          backgroundColor:
                            (scanFile?.certificate_analysis
                              .certificate_findings[2][0] === "info" &&
                              "#3DDB84") ||
                            (scanFile?.certificate_analysis
                              .certificate_findings[2][0] === "high" &&
                              "#FE1102") ||
                            (scanFile?.certificate_analysis
                              .certificate_findings[2][0] === "warning" &&
                              "#FAB626") ||
                            (scanFile?.certificate_analysis
                              .certificate_findings[2][0] === "secure" &&
                              "#3DDB84"),
                        }}
                      >
                        {
                          scanFile?.certificate_analysis
                            .certificate_findings[2][0]
                        }
                      </div>
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <Link to="">View Details</Link>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
            ) : (
              <div>No file result for the scan</div>
            )}
          </AccordionBody>
        
      </Accordion>
     
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Manifest Analysis
        </AccordionHeader>
        
        <AccordionBody>
        {scanFile?.manifest_analysis ? (
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>TITLE</StyledTableCell>
                  {/* <StyledTableCell align="center">CVSS</StyledTableCell> */}
                  <StyledTableCell align="center">SEVERITY</StyledTableCell>
                  {/* <StyledTableCell align="center">STATUS</StyledTableCell> */}
                  <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scanFile.manifest_analysis.map((item, key) => {
                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {item?.title || "N/A"}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (item?.stat === "info" && "#3DDB84") ||
                              (item?.stat === "high" && "#FE1102") ||
                              (item?.stat === "warning" && "#FAB626") ||
                              (item?.stat === "secure" && "#3DDB84"),
                          }}
                        >
                          {item?.stat || "N/A"}
                        </div>
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Link to="">View Details</Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          ) : (
        <div>No file result for the scan</div>
        )}
        </AccordionBody>
      </Accordion> 
          

      
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Binary Analysis
        </AccordionHeader>
        
        <AccordionBody>
        {scanFile?.binary_analysis ? ( 
          <>
          <TableContainer>
            <h3 className="font-bold text-lg pl-4">
              {" "}
              Binary Analysis (fortify)
            </h3>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>DESCRIPTION</StyledTableCell>

                  <StyledTableCell align="center">SEVERITY</StyledTableCell>
                  {/* <StyledTableCell align="center">STATUS</StyledTableCell> */}
                  <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scanFile.binary_analysis.map((item, key) => {
                  const { fortify } = item;

                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {fortify.description || "N/A"}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (fortify?.severity === "info" && "#3DDB84") ||
                              (fortify?.severity === "high" && "#FE1102") ||
                              (fortify?.severity === "warning" && "#FAB626") ||
                              (fortify?.severity === "secure" && "#3DDB84"),
                          }}
                        >
                          {fortify?.severity || "N/A"}
                        </div>
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Link to="">View Details</Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <h3 className="font-bold text-lg pl-4">Binary Analysis (NX)</h3>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>DESCRIPTION</StyledTableCell>

                  <StyledTableCell align="center">SEVERITY</StyledTableCell>
                  {/* <StyledTableCell align="center">STATUS</StyledTableCell> */}
                  <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scanFile.binary_analysis.map((item, key) => {
                  const { nx } = item;

                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {nx.description || "N/A"}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (nx?.severity === "info" && "#3DDB84") ||
                              (nx?.severity === "high" && "#FE1102") ||
                              (nx?.severity === "warning" && "#FAB626") ||
                              (nx?.severity === "secure" && "#3DDB84"),
                          }}
                        >
                          {nx?.severity}
                        </div>
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Link to="">View Details</Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <h3 className="font-bold text-lg pl-4"> Binary Analysis (rPath)</h3>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>DESCRIPTION</StyledTableCell>

                  <StyledTableCell align="center">SEVERITY</StyledTableCell>
                  {/* <StyledTableCell align="center">STATUS</StyledTableCell> */}
                  <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scanFile.binary_analysis.map((item, key) => {
                  const { rpath } = item;

                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {rpath.description}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (rpath?.severity === "info" && "#3DDB84") ||
                              (rpath?.severity === "high" && "#FE1102") ||
                              (rpath?.severity === "warning" && "#FAB626") ||
                              (rpath?.severity === "secure" && "#3DDB84"),
                          }}
                        >
                          {rpath?.severity}
                        </div>
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Link to="">View Details</Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <h3 className="font-bold text-lg pl-4">
            {" "}
            Binary Analysis (stack_canary)
          </h3>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>DESCRIPTION</StyledTableCell>

                  <StyledTableCell align="center">SEVERITY</StyledTableCell>
                  {/* <StyledTableCell align="center">STATUS</StyledTableCell> */}
                  <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scanFile.binary_analysis.map((item, key) => {
                  const { stack_canary } = item;

                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {stack_canary.description}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (stack_canary?.severity === "info" &&
                                "#3DDB84") ||
                              (stack_canary?.severity === "high" &&
                                "#FE1102") ||
                              (stack_canary?.severity === "warning" &&
                                "#FAB626") ||
                              (stack_canary?.severity === "secure" &&
                                "#3DDB84"),
                          }}
                        >
                          {stack_canary?.severity}
                        </div>
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Link to="">View Details</Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <h3 className="font-bold text-lg pl-4"> Binary Analysis (symbol)</h3>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>DESCRIPTION</StyledTableCell>

                  <StyledTableCell align="center">SEVERITY</StyledTableCell>
                  {/* <StyledTableCell align="center">STATUS</StyledTableCell> */}
                  <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scanFile.binary_analysis.map((item, key) => {
                  const { symbol } = item;

                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {symbol.description}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <div
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (symbol?.severity === "info" && "#3DDB84") ||
                              (symbol?.severity === "high" && "#FE1102") ||
                              (symbol?.severity === "warning" && "#FAB626") ||
                              (symbol?.severity === "secure" && "#3DDB84"),
                          }}
                        >
                          {symbol?.severity}
                        </div>
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Link to="">View Details</Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          </>
          ) : (
            <div>No file result for the scan</div>
         )}
        </AccordionBody>
        
       
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        
        <AccordionHeader onClick={() => handleOpen(4)}>
          Network Security
        </AccordionHeader>
        
        <AccordionBody>
        {scanFile?.network_security ? (
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>DESCRIPTION</StyledTableCell>

                  <StyledTableCell align="center">SEVERITY</StyledTableCell>
                  {/* <StyledTableCell align="center">STATUS</StyledTableCell> */}
                  <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scanFile.network_security.map((item, key) => {
                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {item.description}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <button
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (item?.severity === "info" && "#3DDB84") ||
                              (item?.severity === "high" && "#FE1102") ||
                              (item?.severity === "warning" && "#FAB626") ||
                              (item?.severity === "secure" && "#0096FF"),
                          }}
                        >
                          {item?.severity}
                        </button>
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Link to="">View Details</Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          ) : (
            <div>No file result for the scan</div>
          )}
        </AccordionBody>
        
      </Accordion>
      {/* <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Permission
        </AccordionHeader>
       <AccordionBody>
      
       </AccordionBody>
      </Accordion> */}
    </div>
  );
}
