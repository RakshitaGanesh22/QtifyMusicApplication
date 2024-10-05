import React, { useState, useContext } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dataProvider } from "../components/dataContext";

export default function FAQ() {
  const { FAQdata } = useContext(dataProvider);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function AccordionSetter({ item, index }) {
    const { question, answer } = item;
    const curr = `panel${index}`;

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          textAlign: "center",
          width: "100%",
          overflowX:"hidden",
          
          boxSizing:"border-box"
        }}
      >
        <Accordion
          expanded={expanded === curr}
          onChange={handleChange(curr)}
          sx={{ backgroundColor: "#121212",overflow:"hidden" }}
        >
          <AccordionSummary
            expandIcon={
                <ExpandMoreIcon sx={{ color: "#34C94B", fontSize: "40px"}} />
              
            }
            sx={{ height: "80px",paddingLeft:"2rem",
                paddingRight:"2rem",borderRadius:"1rem 1rem 0 0" ,border: "1px solid white",}}
          >
            <Typography variant="h3" sx={{ fontWeight: "500" ,}}>
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              height: "81px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius:"0 0 1rem 1rem" ,border: "1px solid white",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "500", color: "black" }}>
              {answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        overflowX:"hidden"
      }}
    >
      <Box
        sx={{
          width: "70vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Fixed 'alignItem'
          gap: "0.5rem",
        }}
      >
        <Typography variant="h1" sx={{ padding: "2rem" }}>
          FAQs
        </Typography>
        <Box
          sx={{
            width: "70vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // Fixed 'alignItem'
            gap: "1rem",
            marginBottom:"15rem"
          }}
        >
          {FAQdata.map((item, index) => (
            <AccordionSetter key={index} item={item} index={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
