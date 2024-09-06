import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, time, image }) {
  return (
    <Card sx={{ width: "18vw" }}>
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
