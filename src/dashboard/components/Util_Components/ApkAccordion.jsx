import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
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
                    
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {/* {binary_analysis["Binary makes use of Logging function"]
                    .cvss || "N/A"} */}
                    Binary makes use of Logging function
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button>High</Button>
                    {/* <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (binary_analysis["Binary makes use of Logging function"]
                          .severity === "info" &&
                          "#3DDB84") ||
                        (binary_analysis["Binary makes use of Logging function"]
                          .severity === "high" &&
                          "#FE1102") ||
                        (binary_analysis["Binary makes use of Logging function"]
                          .severity === "unknow" &&
                          "#FAB626"),
                    }}
                  >
                    {
                      binary_analysis["Binary makes use of Logging function"]
                        .severity
                    }
                  </Button> */}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {/* {binary_analysis["Binary makes use of insecure API(s)"].masvs} */}
                    Binary makes use of insecure API(s)
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {/* {binary_analysis["Binary makes use of insecure API(s)"].cvss} */}
                    Binary makes use of insecure API(s)
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button>Low</Button>
                    {/* <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (binary_analysis["Binary makes use of insecure API(s)"]
                          .severity === "info" &&
                          "#3DDB84") ||
                        (binary_analysis["Binary makes use of insecure API(s)"]
                          .severity === "high" &&
                          "#FE1102") ||
                        (binary_analysis["Binary makes use of insecure API(s)"]
                          .severity === "unknow" &&
                          "#FAB626"),
                    }}
                  >
                    {
                      binary_analysis["Binary makes use of insecure API(s)"]
                        .severity
                    }
                  </Button> */}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link to="">View Details</Link>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {/* {binary_analysis["Binary makes use of malloc function"].masvs} */}
                    Binary makes use of Logging function
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {/* {binary_analysis["Binary makes use of malloc function"].cvss} */}
                    Binary makes use of malloc function
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button>Medium</Button>
                    {/* <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (binary_analysis["Binary makes use of malloc function"]
                          .severity === "info" &&
                          "#3DDB84") ||
                        (binary_analysis["Binary makes use of malloc function"]
                          .severity === "high" &&
                          "#FE1102") ||
                        (binary_analysis["Binary makes use of malloc function"]
                          .severity === "unknow" &&
                          "#FAB626"),
                    }}
                  >
                    {
                      binary_analysis["Binary makes use of malloc function"]
                        .severity
                    }
                  </Button> */}
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
          Manifest Analysis
        </AccordionHeader>
        <AccordionBody>
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
                        <button
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Binary Analysis (fortify)
        </AccordionHeader>
        <AccordionBody>
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
                  const { fortify } = item;

                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {fortify.description || "N/A"}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <button
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Binary Analysis (NX)
        </AccordionHeader>
        <AccordionBody>
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
                  const {  nx } = item;

                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {nx.description || "N/A"}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <button
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Binary Analysis (rPath)
        </AccordionHeader>
        <AccordionBody>
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
                        <button
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
          Binary Analysis (runpath)
        </AccordionHeader>
        <AccordionBody>
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
                  const { runpath } = item;

                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {runpath.description}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <button
                          className="py-2 px-8 rounded-md text-white"
                          style={{
                            backgroundColor:
                              (runpath?.severity === "info" && "#3DDB84") ||
                              (runpath?.severity === "high" && "#FE1102") ||
                              (runpath?.severity === "warning" && "#FAB626") ||
                              (runpath?.severity === "secure" && "#3DDB84"),
                          }}
                        >
                          {runpath?.severity}
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(8)}>
          Binary Analysis (stack_canary)
        </AccordionHeader>
        <AccordionBody>
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
                        <button
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(7)}>
          Binary Analysis (symbol)
        </AccordionHeader>
        <AccordionBody>
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
                        <button
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(9)}>
          Network Security
        </AccordionHeader>
        <AccordionBody>
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
        </AccordionBody>
      </Accordion>
      
      
    </div>
  );
}
