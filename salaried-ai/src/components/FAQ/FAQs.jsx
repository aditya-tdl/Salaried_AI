"use client";

import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const faqs = [
    {
        question: "What all is covered in this subscription?",
        answer:
            "This subscription covers monthly webinar, weekly newsletters and free resources related to career growth.",
    },
    {
        question: "Will you provide 1:1 support as well?",
        answer:
            "There is no 1:1 support provided in this subscription.",
    },
    {
        question: "What if I miss the Webinar?",
        answer:
            "The session recording will be provided within next 24hrs via mail to you and you can go through it, we will also keep on sending regular mails with the summary of sessions.",
    },
    {
        question: "How does subscription work?",
        answer:
            "This would require you to set a one time upi mandate of INR 59 and if you want to cancel, you can cancel the UPI Mandate right away from your UPI app.",
    },
    {
        question: "Will you help with my resume as well?",
        answer:
            "Resume tips and tricks will be shared with you, but you have to work on it on your own.",
    },
    {
        question: "Do you also guarantee jobs?",
        answer:
            "No, there is no job support or guarantee, you will get latest updates from the job market and you can apply on your own.",
    },
];

export default function FAQs() {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Box
            sx={{
                maxWidth: 1100,
                mx: "auto",
                px: { xs: 2, md: 3 },
                py: 3,
            }}
        >
            {/* Heading */}
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    mb: 5,
                }}
            >
                FAQs
            </Typography>

            {/* Accordion Items */}
            {faqs.map((faq, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    disableGutters
                    elevation={0}
                    sx={{
                        mb: 3,
                        borderRadius: 3,
                        backgroundColor: "#f6f6f6",
                        "&:before": { display: "none" },
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            expanded === index ? (
                                <RemoveIcon sx={{ fontSize: 32, color: "#aaa" }} />
                            ) : (
                                <AddIcon sx={{ fontSize: 32, color: "#aaa" }} />
                            )
                        }
                        sx={{
                            px: { xs: 2.5, md: 4 },
                            py: { xs: 2.5, md: 3 },
                            "& .MuiAccordionSummary-content": {
                                margin: 0,
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: 16, md: 18 },
                                fontWeight: 600,
                            }}
                        >
                            {faq.question}
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails
                        sx={{
                            px: { xs: 2.5, md: 4 },
                            pb: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 16,
                                color: "#555",
                                lineHeight: 1.7,
                            }}
                        >
                            {faq.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
