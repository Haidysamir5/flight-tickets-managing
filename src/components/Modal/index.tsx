import {
  Backdrop,
  Grid,
  Fade,
  Typography,
  Modal as MuiModal,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ModalProps } from "./types";
import { boxStyle } from "./styles";

export default function Modal({
  title,
  children,
  bodyOverFlow,
  open = false,
  setOpenModal,
}: ModalProps) {
  return (
    <div>
      <MuiModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backgroundColor: "#000000c7",
            },
          },
        }}
      >
        <Fade in={open}>
          <Box sx={boxStyle}>
            <Grid direction="column" className="modal-content" container>
              <Grid
                direction="row"
                justifyContent="space-between"
                className="modal-header"
                wrap="nowrap"
                container
                alignItems="center"
                sx={{
                  borderBottom: "1px solid secondary.main",
                }}
              >
                {title && <Typography>{title}</Typography>}

                <IconButton
                  aria-label="close"
                  size="medium"
                  onClick={() => setOpenModal(false)}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid
                direction="column"
                justifyContent="space-between"
                className="modal-body"
                container
                sx={{
                  padding: 2,
                  borderBottom: "1px solid secondary",
                  maxHeight: "60vh",
                  overflow: bodyOverFlow || "auto",
                }}
              >
                {children}
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </MuiModal>
    </div>
  );
}
