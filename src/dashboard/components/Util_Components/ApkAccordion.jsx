import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button
} from "@material-tailwind/react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

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
                  {/* {binary_analysis["Binary makes use of Logging function"]
                    .masvs || "N/A"} */}
                    Binary makes use of Logging function
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
                  {/* {binary_analysis["Binary makes use of Logging function"]
                    .masvs || "N/A"} */}
                    Binary makes use of Logging function
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
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
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
                  {/* {binary_analysis["Binary makes use of Logging function"]
                    .masvs || "N/A"} */}
                    Binary makes use of Logging function
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
    </div>
  );
}