import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Moving from "@mui/icons-material/Moving";

function Dashboard() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Moving />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TechInTalk
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Contained</Button>
      <Link to="/buttons">Buttons Examples </Link>
      <Link to="/inputs">Inputs Examples</Link>
    </div>
  );
}

export default Dashboard;
