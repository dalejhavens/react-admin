import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequetly Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Rhoncus est pellentesque elit ullamcorper. Nibh tortor id aliquet lectus proin nibh nisl. Aliquet nec ullamcorper sit amet risus nullam eget felis. Faucibus interdum posuere lorem ipsum. Posuere lorem ipsum dolor sit. Eget velit aliquet sagittis id consectetur purus ut faucibus. Fames ac turpis egestas sed. Bibendum arcu vitae elementum curabitur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Rhoncus est pellentesque elit ullamcorper. Nibh tortor id aliquet lectus proin nibh nisl. Aliquet nec ullamcorper sit amet risus nullam eget felis. Faucibus interdum posuere lorem ipsum. Posuere lorem ipsum dolor sit. Eget velit aliquet sagittis id consectetur purus ut faucibus. Fames ac turpis egestas sed. Bibendum arcu vitae elementum curabitur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Yet another important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Rhoncus est pellentesque elit ullamcorper. Nibh tortor id aliquet lectus proin nibh nisl. Aliquet nec ullamcorper sit amet risus nullam eget felis. Faucibus interdum posuere lorem ipsum. Posuere lorem ipsum dolor sit. Eget velit aliquet sagittis id consectetur purus ut faucibus. Fames ac turpis egestas sed. Bibendum arcu vitae elementum curabitur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Still another important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Rhoncus est pellentesque elit ullamcorper. Nibh tortor id aliquet lectus proin nibh nisl. Aliquet nec ullamcorper sit amet risus nullam eget felis. Faucibus interdum posuere lorem ipsum. Posuere lorem ipsum dolor sit. Eget velit aliquet sagittis id consectetur purus ut faucibus. Fames ac turpis egestas sed. Bibendum arcu vitae elementum curabitur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        My favorite important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Rhoncus est pellentesque elit ullamcorper. Nibh tortor id aliquet lectus proin nibh nisl. Aliquet nec ullamcorper sit amet risus nullam eget felis. Faucibus interdum posuere lorem ipsum. Posuere lorem ipsum dolor sit. Eget velit aliquet sagittis id consectetur purus ut faucibus. Fames ac turpis egestas sed. Bibendum arcu vitae elementum curabitur.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        A bad yet important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Rhoncus est pellentesque elit ullamcorper. Nibh tortor id aliquet lectus proin nibh nisl. Aliquet nec ullamcorper sit amet risus nullam eget felis. Faucibus interdum posuere lorem ipsum. Posuere lorem ipsum dolor sit. Eget velit aliquet sagittis id consectetur purus ut faucibus. Fames ac turpis egestas sed. Bibendum arcu vitae elementum curabitur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;