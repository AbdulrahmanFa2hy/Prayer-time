import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Prayer({ name, time, image }) {
  // Use useMediaQuery to determine screen size
  const isMobile = useMediaQuery("(max-width:600px)");
  const cardWidth = isMobile ? "80vw" : "18vw"; // Adjust card width based on screen size

  return (
    <Card sx={{ width: cardWidth }}>
      <CardMedia sx={{ height: 190 }} image={image} title="img" />
      <CardContent>
        <h2 style={{ margin: "0 0 10px" }}>{name}</h2>

        <Typography
          variant="h1"
          color="text.secondary"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
}
